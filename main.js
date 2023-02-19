let question = prompt("choose one: add, sub, mult or div");
let firstNumber = Number(prompt("enter the first number"));
let secondNumber = Number(prompt("enter the second number"));
let add = firstNumber+secondNumber;
let sub = firstNumber-secondNumber;
let mult = firstNumber*secondNumber;
let div = firstNumber/secondNumber;
if(question.toLowerCase() === "add") {
    alert(`${firstNumber} + ${secondNumber} = ${add}`);
}
else if (question.toLowerCase() === "sub"){
    alert(`${firstNumber} - ${secondNumber} = ${sub}`);
}
else if (question.toLowerCase() === "mult"){
    alert(`${firstNumber} * ${secondNumber} = ${mult}`);
}
else if (question.toLowerCase() === "div"){
    alert(`${firstNumber} / ${secondNumber} = ${div}`);
}
else {
    alert("try again and read the terms carefully");
}




