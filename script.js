//Get Elements from HTML Document
let questionContainer = document.getElementById('question');
let answersContainer = document.getElementById('answerChoices');
let feedbackContainer = document.getElementById('feedback');

//Questions Array
const questions = [
    { question: "What is the capital of France?", answers: ["Paris", "Berlin", "Madrid"], correct: 0 },
    { question: "Which language runs in the browser?", answers: ["Python", "JavaScript", "C++"], correct: 1 },
    { question: "What is 2 + 2?", answers: ["3", "4", "5"], correct: 1 },
];
//Questions Index
let index = 0;

//Stats Variables
let correct = 0;
let wrong = 0;

//Set starting page
let initialQuestion = document.createElement('p');
let btnStart = document.createElement('button');
initialQuestion.textContent = 'Click Start if you would like to play!';
btnStart.textContent = 'Start';
questionContainer.append(initialQuestion, btnStart);

//Helper function to display new question
function newQuestion() {
    if (index < questions.length) {
        //Clear out content
        questionContainer.textContent = '';
        answersContainer.textContent = '';
        feedbackContainer.textContent = '';
        //Set question
        questionContainer.textContent = questions[index].question;
        //Set answers
        questions[index].answers.forEach((answer) => {
            let btnAnswer = document.createElement('button');
            btnAnswer.textContent = answer;
            answersContainer.appendChild(btnAnswer);
        });
    } else {
        questionContainer.textContent = 'Thanks for playing!';
        answersContainer.textContent = '';
        feedbackContainer.textContent = `
        Here are your stats: 
        Correct: ${correct} 
        Wrong: ${wrong}.`
    };
};

//Event listener to start game
btnStart.addEventListener('click', 
    //Game function
    function startQuiz() {
        //Clear out content
        questionContainer.textContent = '';
        answersContainer.textContent = '';
        feedbackContainer.textContent = '';

        //Run helper function to display new question
        newQuestion();

        //Check user's answer
        answersContainer.addEventListener('click', (event) => {
            index++;
            if (questionContainer.textContent === 'What is the capital of France?' && event.target.tagName === 'BUTTON' && event.target.textContent === 'Paris') {
                correct++;
                feedbackContainer.textContent = 'Correct!';
            } else if (questionContainer.textContent === 'Which language runs in the browser?' && event.target.tagName === 'BUTTON' && event.target.textContent === 'JavaScript') {
                correct++;
                feedbackContainer.textContent = 'Correct!';
            } else if (questionContainer.textContent === 'What is 2 + 2' && event.target.tagName === 'BUTTON' && event.target.textContent === 4) {
                correct++;
                feedbackContainer.textContent = 'Correct!';
            } else {
                wrong++;
                feedbackContainer.textContent = 'Wrong';
            }
            setTimeout(() => {
                newQuestion();
            }, 1000);
            console.log(`Correct: ${correct}. Wrong: ${wrong}`);
        });
    }
);