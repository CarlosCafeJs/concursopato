
export interface Alternative {
  letter: string;
  text: string;
}

export interface Explanation {
  correct: string;
  incorrect: string;
}

export interface Question {
  id: string;
  topic: string;
  text: string;
  instruction: string;
  alternatives: Alternative[];
  correctAnswer: string;
  explanation: Explanation;
  comment: string;
}

