const questionElement = document.getElementById("Question");
const answersElement = document.getElementById("Answers");
const startScreen = document.getElementById("StartScreen");
const quizScreen = document.getElementById("QuizScreen");
const gameOverScreen = document.getElementById("GameOverScreen");
const finalScoreElement = document.getElementById("FinalScore");

let questions = [
    "What color is the sky?",
    "What's the coolest dinsosaur?",
    "AnotherQuestion"
];
let possibleAnswers = [
    ["Red", "Green", "Blue", "Cyan", "Black"],
    ["T-Rex", "Raptor", "Stego", "D-Rex"],
    ["Another Answer"]
];
let answerScores = new Array(questions.length);
let correctAnswerIndexes = [
    "Blue", 
    "D-Rex", 
    "Another Answer"
];
let currentQuestionIndex = 0;

function setupQuestion() {
    //Updated so it displays the Game Over Screen when the quiz ends.
    if (currentQuestionIndex >= questions.length) {
        let finalScore = answerScores.reduce((total, score) => total + (score || 0), 0);
        finalScoreElement.innerHTML = finalScore;
        quizScreen.style.display = "none";
        gameOverScreen.style.display = "block";
        return;
    }
    questionElement.innerHTML = questions[currentQuestionIndex];
    answersElement.innerHTML = "";
    possibleAnswers[currentQuestionIndex].forEach(element => {
    let thisAnswer = document.createElement("li");
    thisAnswer.innerHTML = element;
    thisAnswer.onclick = (event) => {
    if(event.target.innerHTML == correctAnswerIndexes[currentQuestionIndex]){
    answerScores[currentQuestionIndex] = 1;
    }
    currentQuestionIndex++;
    setupQuestion();
    };
    answersElement.appendChild(thisAnswer);
    });
    }
/*function setupQuestion(){
    //Only move on if index exists, otherwise return 
    if(currentQuestionIndex > questions.length - 1){
        let finalScore = 0;
        answerScores.forEach(element =>{
            finalScore += element;
        });
        alert(finalScore);
        return;
    }
    questionElement.innerHTML = questions[currentQuestionIndex];
    answersElement.innerHTML = "";
    possibleAnswers[currentQuestionIndex].forEach(element =>{
        let thisAnswer = document.createElement("li");
        thisAnswer.innerHTML = element;
        thisAnswer.onclick = (event) => {
            //TODO: add to player score before moving to next questions
            
            possibleAnswers[currentQuestionIndex].forEach(element =>{
                if(event.target.innerHTML == correctAnswerIndexes[currentQuestionIndex]){
                    answerScores[currentQuestionIndex] = 1;
                    return;
                }
            });

            currentQuestionIndex++;
            setupQuestion();
        };
        answersElement.appendChild(thisAnswer);
    });
}*/

function startQuiz() {
    startScreen.style.display = "none";
    gameOverScreen.style.display = "none";
    quizScreen.style.display = "block";
    currentQuestionIndex = 0;
    answerScores = new Array (questions.length).fill(0);
    setupQuestion();
}

function restartQuiz() {
    gameOverScreen.style.display = "none";
    startScreen.style.display = "block";
}