const QUESTIONS = [
    {
        question: 'O RLY?',
        answers: [ 'YA RLY!', 'SRSLY?', 'Y U NO LIEK ME?!', 'LOL WUT' ]
    },
]

function renderAnswer(answer) {
    return `<li>${answer}</li>`;
}

function renderQuestion({ question, answers }) {
    return `
      <div>
        <p>${question}</p>
        <ul>
          ${answers.map(renderAnswer).join('')}
        </ul>
      </div>`;
}

function createRoot() {
    const root = document.createElement('div');
    document.querySelector('body').appendChild(root);
    return root;
}

document.addEventListener('DOMContentLoaded', () => {
    console.log('Ready for work!');

    const root = createRoot();
    root.innerHTML = renderQuestion(QUESTIONS[0]);
});
