//alert("hello, just checking to see if you're linked");

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

let currentQuestionIndex = 0;

function setupQuestion(){

if(currentQuestionIndex > questions.length - 1){
    return;
}
    questionElement.innerHTML = questions[currentQuestionIndex];
    answersElement.innerHTML = "";
    possibleAnswers[currentQuestionIndex].forEach(element =>{
    let thisAnswer = document.createElement("li");
    thisAnswer.innerHTML = element;
    thisAnswer.onclick = () => {
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
