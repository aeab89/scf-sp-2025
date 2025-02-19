const questionElement = document.getElementById("Question");
const answersElement = document.getElementById("Answers");

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

function setupQuestion(){
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
}
setupQuestion();


