const questionElement = document.getElementById("Question");
const answersElement = document.getElementById("Answers");

let questions = [
    "What color is the sky?",
    "What's the coolest dinosaur?"
];

let possibleAnswers = [
    ["Red", "Green", "Blue", "Cyan", "Purple"],
    ["T-Rex", "Raptor", "Stego", "D-Rex"]
];

let answerScores = new Array(questions.length);
let correctAnswerIndices = [
    2,
    3,
    0
];

let currentQuestionIndex = 0;

function setupQuestion(){
    //Only move on if index exists, otherwise return.
    if(currentQuestionIndex > questions.length - 1){
    return;
    }
    questionElement.innerHTML = questions[currentQuestionIndex];
    answersElement.innerHTML = "";
    possibleAnswers[currentQuestionIndex].forEach(element =>{
    let thisAnswer = document.createElement("li");
    thisAnswer.innerHTML = element;
    thisAnswer.onclick = () => {
        //TO DO: add to player score before moving to next questions
        
        currentQuestionIndex++;
        setupQuestion();
    }
    answersElement.appendChild(thisAnswer)
});
}

setupQuestion();


/*
let thisAnswer = document.createElement("li");
thisAnswer.innerHTML = possibleAnswers[0];

answersElement.appendChild(thisAnswer);
*/
