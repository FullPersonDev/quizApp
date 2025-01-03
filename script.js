//Query Selectors
let questionContainer = document.querySelector('#question');
let answerOneBtn = document.querySelector('#answerOne');
let answerTwoBtn = document.querySelector('#answerTwo');
let answerThreeBtn = document.querySelector('#answerThree');

//Questions Array
const questions = [
    { question: "What is the capital of France?", answers: ["Paris", "Berlin", "Madrid"], correct: 0 },
    { question: "Which language runs in the browser?", answers: ["Python", "JavaScript", "C++"], correct: 1 },
    { question: "What is 2 + 2?", answers: ["3", "4", "5"], correct: 1 },
];

//Stats Variables
let correct = 0;
let wrong = 0;

//Game Main Function
function startQuiz() {
    //Set First Question and Answers
    questionContainer.textContent = questions[0].question;
    answerOneBtn.textContent = questions[0].answers[0];
    answerTwoBtn.textContent = questions[0].answers[1];
    answerThreeBtn.textContent = questions[0].answers[2];

    //Store user's answer
    let userChoice = '';

    if (userChoice === 'Paris') {
        correct++;
        window.alert('You are correct');
    } else {
        wrong++;
        window.alert('You are wrong');
    }

    window.alert(`
        Stats:
        Correct: ${correct}
        Wrong: ${wrong}
    `);

    
    //Ask to play again
    let playagain = window.confirm('Would you like to play again?');
    if(playagain) {
        startQuiz();
    } else {
        return;
    }
};

//Start Quiz
startQuiz();