/*
Simple Quiz App
Ask a basic question with a one word answer. (<p> of html)
Use a text input to get the user's answer when a button is pressed.
The button should call a function that checks if the answer is correct.
The fuction should alert the user if it is right or wrong.
*/

let firstVisit = false;

if(firstVisit == true){
    alert("Hello World!");
}

function SayHi(){
    let name = document.getElementById("Name").value;
    alert("Hello " + name + "!");
}


function colorOfBlood(){
let color = document.getElementById("Color").value;
if(color == "red" || "Red"){
    alert("You are correct!");
} else{
    alert("That is incorrect. Try again!");
}
}
