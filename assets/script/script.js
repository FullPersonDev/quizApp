//Get Elements from HTML Document
let questionContainer = document.getElementById('question');
let answersContainer = document.getElementById('answerChoices');
let feedbackContainer = document.getElementById('feedback');

//Questions Array
const questions = [
    { question: "What is the capital of France?", answers: ["Paris", "Berlin", "Madrid"], correct: 0 },
    { question: "Which language runs in the browser?", answers: ["Python", "JavaScript", "C++"], correct: 1 },
    { question: "What is 2 + 2?", answers: ["3", "4", "5"], correct: 1 },
    { question: 'What is 5 x 5?', answers: [30, 100, 25], correct: 2},
    { question: 'Which pokemon is yellow and most famous?', answers: ['Yellow Bunny', 'Charmeleon', 'Pikachu'], correct: 2},
    { question: 'Which ice skates have a toe pick in front?', answers: ['Rocket Skates', 'Figure Skates', 'Hockey Skates'], correct: 1},
    { question: 'How did the cell phone ask his girlfriend to marry him?', answers: ['He gave her a ring'], correct: 0}
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
            } else if (questionContainer.textContent === 'What is 2 + 2?' && event.target.tagName === 'BUTTON' && event.target.textContent === "4") {
                correct++;
                feedbackContainer.textContent = 'Correct!';
            } else if (questionContainer.textContent === 'What is 5 x 5?' && event.target.tagName === 'BUTTON' && event.target.textContent === 25) {
                correct++;
                feedbackContainer.textContent = 'Correct!';
            } else if (questionContainer.textContent === 'Which pokemon is yellow and most famous?' && event.target.tagName === 'BUTTON' && event.target.textContent === 'Pikachu') {
                correct++;
                feedbackContainer.textContent = 'Correct!';
            } else if (questionContainer.textContent === 'Which ice skates have a toe pick in front?' && event.target.tagName === 'BUTTON' && event.target.textContent === 'Figure Skates') {
                correct++;
                feedbackContainer.textContent = 'Correct!';
            } else if (questionContainer.textContent === 'How did the cell phone ask his girlfriend to marry him?' && event.target.tagName === 'BUTTON' && event.target.textContent === 'He gave her a ring') {
                correct++;
                feedbackContainer.textContent = 'Correct!';
            }
            else {
                wrong++;
                feedbackContainer.textContent = 'Wrong';
            }
            //Set new question after checking answer
            setTimeout(() => {
                newQuestion();
            }, 1000);
        });
    }
);