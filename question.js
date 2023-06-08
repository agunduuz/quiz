function Question(questionContent, answers, correctAnswer) {
  this.questionContent = questionContent;
  this.answers = answers;
  this.correctAnswer = correctAnswer;
}

Question.prototype.questionCheck = function (answer) {
  return answer === this.correctAnswer;
};

let questions = [
  new Question(
    '1-Which one is a CSS library?',
    { a: 'Bootstap', b: 'ExpressJS', c: 'Vue ' },
    'a'
  ),
  new Question(
    '2-Which one is a JavaScript Package Management Application?',
    { a: 'NodeJS', b: 'TypeScript', c: 'NPM' },
    'c'
  ),
  new Question(
    '3-Which one is a React library?',
    { a: 'Angular', b: 'Vue', c: 'Material-UI' },
    'c'
  ),
  new Question(
    '4-What is the acronym for HTTPS?',
    {
      a: 'Hypertext Transfer Protocol Secure',
      b: 'High-level Text Protocol for Secure Browsing',
      c: 'Hyperlink Transport Protocol with Secure Encryption',
    },
    'a'
  ),
];
