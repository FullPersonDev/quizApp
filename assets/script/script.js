//Get Elements from HTML Document
let questionContainer = document.getElementById('question');
let answersContainer = document.getElementById('answerChoices');
let feedbackContainer = document.getElementById('feedback');

//Questions Array
const questions = [
    { question: "What is the capital of France?", answers: ["Paris", "Berlin", "Madrid"], correct: 0 },
    { question: "Which language runs in the browser?", answers: ["Python", "JavaScript", "C++"], correct: 1 },
    { question: "What is 2 + 2?", answers: ["3", "4", "5"], correct: 1 },
    { question: 'What is 5 x 5?', answers: ['30', '100', '25'], correct: 2},
    { question: 'Which pokemon is yellow and most famous?', answers: ['Yellow Bunny', 'Charmeleon', 'Pikachu'], correct: 2},
    { question: 'Which ice skates have a toe pick in front?', answers: ['Rocket Skates', 'Figure Skates', 'Hockey Skates'], correct: 1},
    { question: 'What is the most popular sport in USA?', answers: ['Football', 'Soccer', 'Baseball'], correct: 0},
    { question: 'Who is the most famous Pokemon trainer in Pokemon?', answers: ['Ash', 'Goh', 'Ruby'], correct: 0},
];
//Questions Index
let index = 0;

//Stats Variables
let correct = 0;
let wrong = 0;

//Set starting page
let initialQuestion = document.createElement('p');
let btnStart = document.createElement('button');
initialQuestion.textContent = 'Click Start to play!';
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
        feedbackContainer.textContent = '';
        let pFeedbackEl1 = document.createElement('p');
        let pFeedbackEl2 = document.createElement('p');
        let pFeedbackEl3 = document.createElement('p');
        feedbackContainer.append(pFeedbackEl1, pFeedbackEl2, pFeedbackEl3);
        pFeedbackEl1.textContent = `Here are your stats:`;
        pFeedbackEl2.textContent = `Correct: ${correct}`;
        pFeedbackEl3.textContent = `Wrong: ${wrong}`;
    };
};

//Check user's answer
answersContainer.addEventListener('click', (event) => {
    if (event.target.tagName === 'BUTTON') {
        const selectedAnswer = event.target.textContent;
        const correctAnswer = questions[index].answers[questions[index].correct];
        if (selectedAnswer === correctAnswer){
            correct++;
            feedbackContainer.textContent = 'Correct!';
        } else {
            wrong++;
            feedbackContainer.textContent = 'Wrong';
        }
        //Increment index after checking answer
        index++;
        //Set new question after checking answer
        setTimeout(() => {
            newQuestion();
        }, 1000);
    }
});

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
    }
);