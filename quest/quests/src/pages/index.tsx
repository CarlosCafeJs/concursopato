'use client'; // Enable client-side interactivity

import { useState } from 'react';
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
} from 'chart.js';
import { Pie } from 'react-chartjs-2';
import { questions } from '../../db/questions'; // Importe as perguntas do arquivo separado

ChartJS.register(ArcElement, Tooltip, Legend);

export default function Home() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState<(string | null)[]>(questions.map(() => null));
  const [answerShown, setAnswerShown] = useState<boolean[]>(questions.map(() => false));
  const [commentShown, setCommentShown] = useState<boolean[]>(questions.map(() => false));
  const [showSummary, setShowSummary] = useState(false);

  const handleSelect = (letter: string) => {
    console.log(`Selected letter: ${letter} for question ${currentIndex}`); // Debug log
    const newAnswers = [...answers];
    newAnswers[currentIndex] = letter;
    setAnswers(newAnswers);
  };

  const handleShowAnswer = () => {
    console.log(`Button Resposta clicked. Showing answer for question ${currentIndex}, selected: ${answers[currentIndex]}`); // Enhanced debug log
    if (answers[currentIndex]) {
      const newAnswerShown = [...answerShown];
      newAnswerShown[currentIndex] = true;
      setAnswerShown(newAnswerShown);
    } else {
      alert('Por favor, selecione uma alternativa antes de ver a resposta.');
    }
  };

  const handleShowComment = () => {
    console.log(`Button Comentário clicked for question ${currentIndex}`); // Debug log for comment button
    const newCommentShown = [...commentShown];
    newCommentShown[currentIndex] = true;
    setCommentShown(newCommentShown);
  };

  const answeredCount = answerShown.filter(a => a).length;

  const handleNext = () => {
    if (currentIndex < questions.length - 1) {
      setCurrentIndex(currentIndex + 1);
    } else if (answeredCount >= 20) {
      setShowSummary(true);
    }
  };

  const handlePrevious = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const calculateScore = () => {
    let correct = 0;
    answers.forEach((ans, idx) => {
      if (ans === questions[idx].correctAnswer && answerShown[idx]) correct++;
    });
    return { correct, total: answeredCount };
  };

  const handlePrint = () => {
    window.print();
  };

  if (showSummary) {
    const { correct, total } = calculateScore();
    const data = {
      labels: ['Corretas', 'Incorretas'],
      datasets: [
        {
          data: [correct, total - correct],
          backgroundColor: ['#27AE60', '#E74C3C'],
        },
      ],
    };

    return (
      <div className="summary">
        <h2>Resumo</h2>
        <p>Pontuação: {correct} / {total}</p>
        <div style={{ width: '300px', margin: 'auto' }}>
          <Pie data={data} />
        </div>
        <button onClick={() => setShowSummary(false)}>Voltar</button>
      </div>
    );
  }

  const question = questions[currentIndex];
  return (
    <div>
      <div className="header">
        <h1>CONHECIMENTOS BANCÁRIOS</h1>
      </div>

      <div className="print-button">
        <button className="btn btn-print" onClick={handlePrint}>Imprimir Simulado</button>
      </div>

      <div id="questionContainer">
        <div className="question-container" id={`question-${currentIndex}`}>
          <div className="question-header">
            <div className="question-number">{question.id}</div>
            <div className="badges">
              <span className="badge badge-concurso">Concurso: Banco do Brasil</span>
              <span className="badge badge-area">Área: Conhecimentos Bancários</span>
              <span className="badge badge-cargo">Cargo: Escriturário</span>
            </div>
          </div>

          <div className="topic-tag">{question.topic || 'Sem tópico'}</div>

          <div className="instruction">Leia o trecho a seguir:</div>

          <div className="text-base">{question.text}</div>

          <div className="instruction">{question.instruction || 'Assinale a alternativa correta:'}</div>

          <div className="alternatives">
            {question.alternatives.map((alt) => (
              <div
                key={alt.letter}
                className={`alternative alternative-${alt.letter.toLowerCase()} ${answers[currentIndex] === alt.letter ? 'selected' : ''}`}
                onClick={() => handleSelect(alt.letter)}
              >
                <div className="alternative-letter">{alt.letter}</div>
                <div className="alternative-text">{alt.text}</div>
              </div>
            ))}
          </div>

          <div className="answer-section">
            <div className="answer-box" id={`answerBox-${currentIndex}`}>
              <span id={`answerText-${currentIndex}`}>
                {answers[currentIndex] ? `Alternativa selecionada: ${answers[currentIndex]}` : 'Selecione uma alternativa'}
              </span>
            </div>
            <button className="btn btn-answer" onClick={handleShowAnswer}>✓ Resposta</button>
            <button className="btn btn-comment" onClick={handleShowComment}>💬 Comentário</button>
          </div>

          {answerShown[currentIndex] && answers[currentIndex] && (
            <div style={{ display: 'block' }} className={`answer-result ${answers[currentIndex] === question.correctAnswer ? 'answer-correct' : 'answer-incorrect'}`} id={`answerResult-${currentIndex}`}>
              <div className="answer-explanation" id={`answerExplanation-${currentIndex}`}
                dangerouslySetInnerHTML={{
                  __html: answers[currentIndex] === question.correctAnswer
                    ? question.explanation.correct
                    : question.explanation.incorrect
                }}
              />
            </div>
          )}

          {commentShown[currentIndex] && (
            <div style={{ display: 'block' }} className="comment-section" id={`commentSection-${currentIndex}`}>
              <div className="comment-title">Comentário do Professor</div>
              <div className="comment-text">{question.comment || 'Sem comentário disponível.'}</div>
            </div>
          )}
        </div>
        <div className="navigation">
          <button disabled={currentIndex === 0} onClick={handlePrevious}>Anterior</button>
          <button onClick={handleNext}>
            {currentIndex === questions.length - 1 ? 'Finalizar' : 'Próximo'}
          </button>
        </div>
        <p>Questões respondidas: {answeredCount}/25</p>
        {answeredCount >= 20 && <button onClick={() => setShowSummary(true)}>Ver Resumo</button>}
      </div>
    </div>
  );
}