const QUESTIONS = [
    {
        question: 'O RLY?',
        answers: [ 'YA RLY!', 'SRSLY?', 'Y U NO LIEK ME?!', 'LOL WUT' ]
    },
]

function renderAnswer(answer) {
    return `<p class="quiz-entry__answer">
        <span class="quiz-entry__answer-button">${answer}</span>
    </p>`;
}

function renderQuestion({ question, answers }) {
    return `
      <div class="quiz-entry quiz-entry_transition_in">
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
    setTimeout(() => {
        document.querySelector('.quiz-entry').classList.remove('quiz-entry_transition_in');
    }, 10)

    document.body.onclick =() => {
        document.querySelector('.quiz-entry').classList.add('quiz-entry_transition_out');
    }
});
