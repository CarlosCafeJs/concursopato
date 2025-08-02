let questions = [];
const state = [];

async function fetchQuestions() {
  const container = document.getElementById('questionContainer');
  const loadingMessage = document.getElementById('loadingMessage');

  try {
    console.log('Iniciando requisição à API...');

    // URL do seu Apps Script
    const apiUrl = 'https://script.google.com/macros/s/AKfycbyAnclN4GUg0CN5Lyr85HlPE25cb_BMyKUIQMW-D01md8OJlFFh3momvT47g9YdusNyCA/exec?sheet=portugues';

    console.log('URL da API:', apiUrl);

    const response = await fetch(apiUrl, {
      method: 'GET',
      mode: 'cors', // Importante para CORS
      cache: 'no-cache',
      headers: {
        'Accept': 'application/json',
      },
    });

    console.log('Status da resposta:', response.status);
    console.log('Headers da resposta:', [...response.headers.entries()]);

    if (!response.ok) {
      throw new Error(`Erro HTTP: ${response.status} - ${response.statusText}`);
    }

    const responseText = await response.text();
    console.log('Resposta bruta da API:', responseText);

    let data;
    try {
      data = JSON.parse(responseText);
    } catch (parseError) {
      console.error('Erro ao fazer parse do JSON:', parseError);
      throw new Error(`Resposta inválida da API: ${responseText.substring(0, 200)}...`);
    }

    console.log('Dados parseados:', data);

    // Verifica se houve erro na API
    if (data.error) {
      throw new Error(`Erro retornado pela API: ${data.error}`);
    }

    // Verifica se a resposta tem o formato esperado
    let questionsArray;
    if (data.success && data.data) {
      questionsArray = data.data;
    } else if (Array.isArray(data)) {
      questionsArray = data;
    } else {
      throw new Error('Formato de resposta inesperado da API');
    }

    // Pega apenas as primeiras 25 questões
    questions = questionsArray.slice(0, 25);

    if (!Array.isArray(questions) || questions.length === 0) {
      throw new Error('Nenhuma questão foi retornada pela API.');
    }

    console.log(`${questions.length} questões carregadas com sucesso`);

    // Inicializa o estado para cada questão
    state.length = 0; // Limpa o array
    questions.forEach((question, index) => {
      // Verifica se a questão tem os campos mínimos necessários
      if (!question.id || !question.text) {
        console.warn(`Questão ${index + 1} está incompleta:`, question);
      }

      state.push({
        selectedAnswer: null,
        answerShown: false,
      });
    });

    // Remove a mensagem de carregamento
    if (loadingMessage) {
      loadingMessage.style.display = 'none';
    }

    // Renderiza as questões
    renderQuestions();

  } catch (error) {
    console.error('Erro detalhado ao buscar questões:', error);

    if (loadingMessage) {
      loadingMessage.style.display = 'none';
    }

    if (container) {
      container.innerHTML = `
        <div style="color: red; padding: 20px; border: 1px solid red; border-radius: 5px; margin: 10px;">
          <h3>Erro ao carregar questões</h3>
          <p><strong>Mensagem:</strong> ${error.message}</p>
          <p><strong>Possíveis soluções:</strong></p>
          <ul>
            <li>Verifique se o Apps Script está publicado como "Web app"</li>
            <li>Confirme que as permissões estão definidas como "Anyone" ou "Anyone with link"</li>
            <li>Verifique se o ID da planilha está correto</li>
            <li>Confirme que a aba "conhecimentosbancarios" existe na planilha</li>
            <li>Teste o link do Apps Script diretamente no navegador</li>
          </ul>
          <button onclick="fetchQuestions()" style="margin-top: 10px; padding: 5px 10px;">
            Tentar Novamente
          </button>
        </div>
      `;
    }
  }
}

function renderQuestions() {
  const container = document.getElementById('questionContainer');
  if (!container) {
    console.error("Elemento 'questionContainer' não encontrado no DOM.");
    return;
  }

  if (!questions || !Array.isArray(questions) || questions.length === 0) {
    console.error('Array de questões está vazio ou não definido.');
    container.innerHTML = '<p style="color: red;">Erro: Nenhuma questão disponível para exibição.</p>';
    return;
  }

  try {
    console.log('Renderizando questões...');
    container.innerHTML = questions.map((question, index) => {
      // Verifica campos obrigatórios
      if (!question.id || !question.text) {
        console.warn(`Questão ${index + 1} está incompleta:`, question);
        return `<div style="color: orange; padding: 10px;">Questão ${index + 1} incompleta</div>`;
      }

      // Monta as alternativas (filtra apenas as que existem)
      const alternatives = [
        { letter: 'A', text: question.alternative_A || question.alternativa_A },
        { letter: 'B', text: question.alternative_B || question.alternativa_B },
        { letter: 'C', text: question.alternative_C || question.alternativa_C },
        { letter: 'D', text: question.alternative_D || question.alternativa_D },
        { letter: 'E', text: question.alternative_E || question.alternativa_E },
      ].filter(alt => alt.text && String(alt.text).trim() !== '');

      return `
        <div class="question-container" id="question-${index}">
            <div class="question-header">
                <div class="question-number">${question.id}</div>
                <div class="badges">
                    <span class="badge badge-concurso">Concurso: Banco do Brasil</span>
                    <span class="badge badge-area">Área: Conhecimentos Bancários</span>
                    <span class="badge badge-cargo">Cargo: Escriturário</span>
                </div>
            </div>
            
            <div class="topic-tag">${question.topic || question.topico || 'Sem tópico'}</div>
            
            <div class="instruction">Leia o trecho a seguir:</div>
            
            <div class="text-base">${question.text || question.texto}</div>
            
            <div class="instruction">${question.instruction || question.instrucao || 'Assinale a alternativa correta:'}</div>
            
            <div class="alternatives">
                ${alternatives.map(alt => `
                    <div class="alternative alternative-${alt.letter.toLowerCase()}" data-letter="${alt.letter}" data-question-index="${index}">
                        <div class="alternative-letter">${alt.letter}</div>
                        <div class="alternative-text">${alt.text}</div>
                    </div>
                `).join('')}
            </div>
            
            <div class="answer-section">
                <div class="answer-box" id="answerBox-${index}">
                    <span id="answerText-${index}">Selecione uma alternativa</span>
                </div>
                <button class="btn btn-answer" onclick="showAnswer(${index})">✓ Resposta</button>
                <button class="btn btn-comment" onclick="showComment(${index})">💬 Comentário</button>
            </div>
            
            <div class="answer-result" id="answerResult-${index}" style="display: none;">
                <div class="answer-explanation" id="answerExplanation-${index}"></div>
            </div>
            
            <div class="comment-section" id="commentSection-${index}" style="display: none;">
                <div class="comment-title">Comentário do Professor</div>
                <div class="comment-text">${question.comment || question.comentario || 'Sem comentário disponível.'}</div>
            </div>
        </div>
      `;
    }).join('');

    // Adiciona event listeners para as alternativas
    document.querySelectorAll('.alternative').forEach(alternative => {
      alternative.addEventListener('click', () => {
        const questionIndex = parseInt(alternative.getAttribute('data-question-index'), 10);
        const letter = alternative.getAttribute('data-letter');
        selectAlternative(questionIndex, letter);
      });
    });

    console.log('Questões renderizadas com sucesso');

  } catch (error) {
    console.error('Erro ao renderizar questões:', error);
    container.innerHTML = `<p style="color: red;">Erro ao renderizar questões: ${error.message}.</p>`;
  }
}

function selectAlternative(questionIndex, letter) {
  const questionState = state[questionIndex];
  if (!questionState) {
    console.error(`Estado não encontrado para a questão ${questionIndex}`);
    return;
  }

  // Remove seleção anterior
  const alternatives = document.querySelectorAll(`#question-${questionIndex} .alternative`);
  alternatives.forEach(alt => {
    alt.style.backgroundColor = '';
    alt.style.border = 'var(--border-width-base) solid var(--border-primary)';
  });

  // Adiciona seleção atual
  const selectedAlt = document.querySelector(`#question-${questionIndex} .alternative-${letter.toLowerCase()}`);
  if (selectedAlt) {
    selectedAlt.style.backgroundColor = 'rgba(139, 76, 187, 0.2)';
    selectedAlt.style.border = '2px solid #8B4CBB';
  }

  // Atualiza estado
  questionState.selectedAnswer = letter;

  // Atualiza interface
  const answerBox = document.getElementById(`answerBox-${questionIndex}`);
  const answerText = document.getElementById(`answerText-${questionIndex}`);
  if (answerText && answerBox) {
    answerText.textContent = `Alternativa selecionada: ${letter}`;
    answerBox.style.borderColor = '#8B4CBB';
    answerBox.style.backgroundColor = 'rgba(139, 76, 187, 0.05)';
  }
}

function showAnswer(questionIndex) {
  const questionState = state[questionIndex];
  const question = questions[questionIndex];
  const answerResult = document.getElementById(`answerResult-${questionIndex}`);
  const explanation = document.getElementById(`answerExplanation-${questionIndex}`);

  if (!questionState || !question) {
    console.error(`Questão ou estado não encontrado para o índice ${questionIndex}`);
    alert('Erro: Questão não encontrada.');
    return;
  }

  if (!questionState.selectedAnswer) {
    alert('Por favor, selecione uma alternativa antes de ver a resposta.');
    return;
  }

  if (answerResult) {
    answerResult.style.display = 'block';

    const correctAnswer = question.correctAnswer || question.resposta_correta || question.gabarito;
    const isCorrect = questionState.selectedAnswer === correctAnswer;

    if (isCorrect) {
      answerResult.className = 'answer-result answer-correct';
      if (explanation) {
        explanation.innerHTML = question.explanation_correct || question.explicacao_correta || 'Resposta correta!';
      }
    } else {
      answerResult.className = 'answer-result answer-incorrect';
      if (explanation) {
        explanation.innerHTML = question.explanation_incorrect || question.explicacao_incorreta ||
          `Resposta incorreta. A resposta correta é: ${correctAnswer}`;
      }
    }
  }

  questionState.answerShown = true;
}

function showComment(questionIndex) {
  const commentSection = document.getElementById(`commentSection-${questionIndex}`);
  if (commentSection) {
    commentSection.style.display = commentSection.style.display === 'block' ? 'none' : 'block';
  } else {
    console.error(`Seção de comentário não encontrada para a questão ${questionIndex}`);
  }
}

// Inicializa quando o DOM estiver carregado
document.addEventListener('DOMContentLoaded', () => {
  console.log('DOM carregado, iniciando fetchQuestions...');
  fetchQuestions();
});