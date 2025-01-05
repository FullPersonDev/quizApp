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

//Stats Variables
let correct = 0;
let wrong = 0;

//Set starting page
let initialQuestion = document.createElement('p');
let btnStart = document.createElement('button');
initialQuestion.textContent = 'Click Start if you would like to play!';
btnStart.textContent = 'Start';
questionContainer.append(initialQuestion, btnStart);

//Event listener to start game
btnStart.addEventListener('click', 
    //Game Main Function
    function startQuiz() {
        //Set first question
        questionContainer.textContent = questions[0].question;
        //Set first answers
        questions[0].answers.forEach((answer) => {
            let btnAnswer = document.createElement('button');
            btnAnswer.textContent = answer;
            answersContainer.appendChild(btnAnswer);
        });
        //Check user's answer
        answersContainer.addEventListener('click', (event) => {
            if (event.target.tagName === 'BUTTON' && event.target.textContent === 'Paris') {
                correct++;
                feedbackContainer.textContent = 'You are correct!';
            } else {
                wrong++;
                feedbackContainer.textContent = 'You are wrong';
            }
            //Next Question
            setTimeout(() => {
                feedbackContainer.textContent = '';
                answersContainer.textContent = '';
                //Set second question
                questionContainer.textContent = questions[1].question;
                //Set second answers
                questions[1].answers.forEach((answer) => {
                    let btnAnswer = document.createElement('button');
                    btnAnswer.textContent = answer;
                    answersContainer.appendChild(btnAnswer);
                });
                //Check user's answer
                answersContainer.addEventListener('click', (event) => {
                    if (event.target.tagName === 'BUTTON' && event.target.textContent === 'JavaScript') {
                        correct++;
                        feedbackContainer.textContent = 'You are correct!';
                    } else {
                        wrong++;
                        feedbackContainer.textContent = 'You are wrong';
                    }
                    //Next Question
                    setTimeout(() => {
                        feedbackContainer.textContent = '';
                        answersContainer.textContent = '';
                        //Set third question
                        questionContainer.textContent = questions[2].question;
                        //Set second answers
                        questions[2].answers.forEach((answer) => {
                            let btnAnswer = document.createElement('button');
                            btnAnswer.textContent = answer;
                            answersContainer.appendChild(btnAnswer);
                        });
                        //Check user's answers
                        answersContainer.addEventListener('click', (event) => {
                            if (event.target.tagName === 'BUTTON' && event.target.textContent === 4) {
                                correct++;
                                feedbackContainer.textContent = 'You are Correct';
                            } else {
                                wrong++;
                                feedbackContainer.textContent = 'You are wrong';
                            }
                            //Set Total Stats
                            setTimeout(() => {
                                answersContainer.textContent = '';
                                questionContainer.textContent = 'Thanks for playing!';
                                feedbackContainer.textContent = `Here are your stats:
                                Correct: ${correct}
                                Wrong: ${wrong}`;
                            }, 1000);
                        });
                    }, 1000);
                });
            }, 1000);
        });
    }
);