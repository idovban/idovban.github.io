const QUESTIONS = [
    {
        question: 'O RLY?',
        answers: [ 'YA RLY!', 'SRSLY?', 'Y U NO LIEK ME?!', 'LOL WUT' ]
    },
]

function renderAnswer(answer) {
    return `<p class="quiz-entry__answer">${answer}</p>`;
}

function renderQuestion({ question, answers }) {
    return `
      <div class="quiz-entry">
        <p class="quiz-entry__question">${question}</p>
        ${answers.map(renderAnswer).join('')}
      </div>`;
}

function createRoot() {
    const root = document.createElement('div');
    document.querySelector('body').appendChild(root);
    root.setAttribute('id', 'root');
    return root;
}

document.addEventListener('DOMContentLoaded', () => {
    const root = createRoot();
    root.innerHTML = renderQuestion(QUESTIONS[0]);
});
