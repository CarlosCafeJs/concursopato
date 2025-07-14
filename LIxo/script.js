let selectedAnswer = null;
let answerShown = false;

function selectAlternative(letter) {
  // Remover seleção anterior
  document.querySelectorAll('.alternative').forEach(alt => {
    alt.style.backgroundColor = '';
    alt.style.border = '';
  });

  // Destacar seleção atual
  const selectedAlt = document.querySelector(`.alternative-${letter.toLowerCase()}`);
  if (selectedAlt) {
    selectedAlt.style.backgroundColor = 'rgba(139, 76, 187, 0.2)';
    selectedAlt.style.border = '2px solid #8B4CBB';
  }

  selectedAnswer = letter;

  // Atualizar caixa de resposta
  const answerBox = document.getElementById('answerBox');
  const answerText = document.getElementById('answerText');

  if (selectedAnswer) {
    answerText.textContent = `Alternativa selecionada: ${letter}`;
    answerBox.style.borderColor = '#8B4CBB';
    answerBox.style.backgroundColor = 'rgba(139, 76, 187, 0.05)';
  }
}

function showAnswer() {
  const answerResult = document.getElementById('answerResult');
  const explanation = answerResult.querySelector('.answer-explanation');

  if (selectedAnswer) {
    answerResult.style.display = 'block';

    if (selectedAnswer === 'C') {
      answerResult.className = 'answer-result answer-correct';
      explanation.innerHTML = `
                <strong>✓ Resposta correta!</strong><br>
                A alternativa C está correta. O texto afirma claramente que "textos bem estruturados, objetivos e gramaticalmente corretos demonstram profissionalismo e respeito ao interlocutor" e são "essenciais para a imagem da instituição".
            `;
    } else {
      answerResult.className = 'answer-result answer-incorrect';
      explanation.innerHTML = `
                <strong>✗ Resposta incorreta.</strong><br>
                A resposta correta é a alternativa <strong>C</strong>. O texto estabelece uma relação direta entre a boa estruturação de textos e a imagem institucional, afirmando que textos bem estruturados são "essenciais para a imagem da instituição".
            `;
    }
  } else {
    alert('Por favor, selecione uma alternativa antes de ver a resposta.');
  }

  answerShown = true;
}

function showComment() {
  const commentSection = document.getElementById('commentSection');

  if (commentSection.style.display === 'none' || commentSection.style.display === '') {
    commentSection.style.display = 'block';
  } else {
    commentSection.style.display = 'none';
  }
}

function nextQuestion() {
  // Desabilitado - apenas 1 questão
}

function previousQuestion() {
  // Desabilitado - apenas 1 questão
}