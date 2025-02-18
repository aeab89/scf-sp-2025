const questionElement = document.getElementById("Question");
const answersElement = document.getElementById("Answers");

let currentQuestion = "What color is the sky?";
let possibleAnswers = ["Red", "Green", "Blue", "Cyan", "Purple"];


questionElement.innerHTML = currentQuestion;

possibleAnswers.forEach(element =>{
    let thisAnswer = document.createElement("li");
    thisAnswer.innerHTML = element;
    answersElement.appendChild(thisAnswer)
});

/*
let thisAnswer = document.createElement("li");
thisAnswer.innerHTML = possibleAnswers[0];

answersElement.appendChild(thisAnswer);
*/
