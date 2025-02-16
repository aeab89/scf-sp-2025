//alert("Hello World");

function CalculateTwoNumbers(){
    let number1 = parseInt(document.getElementById("FirstNumber").value);
    let number2 = parseInt(document.getElementById("SecondNumber").value);
    let operationType = document.getElementById("OperationType").value;

    if(operationType == "Add"){
        document.getElementById("Result").innerText = number1 + number2
    }
    else if(operationType == "Subtract"){
        document.getElementById("Result").innerText = number1 - number2
    }
    else if(operationType == "Multiply"){
        console.log (number1 * number2);
        document.getElementById("Result").innerText = number1 * number2
    }
    else if(operationType == "Divide"){
        document.getElementById("Result").innerText = number1 / number2
    }
}    

/*let number1 = parseInt(document.getElementById("FirstNumber").value);
let number2 = parseInt(document.getElementById("SecondNumber").value);

function AddTwoNumbers(number1, number2){
    let result = number1 + number2;
    return result;
}

function SubtractTwoNumbers(number1, number2){
    let result = number1 - number2;
    return result;
}

function MultiplyTwoNumbers(number1, number2){
    let result = number1 * number2;
    return result;
}

function DivideTwoNumbers(number1, number2){
    let result = number1 / number2;
    return result;
}*/