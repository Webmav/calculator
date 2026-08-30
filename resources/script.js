//2
let numb1;
let numb2;
let operator;

//1
function add(num1,num2){
    return num1+num2;
}
function subtract(num1,num2){
    return num1-num2;
}
function multiply(num1,num2){
    return num1*num2;
}
function divide(num1,num2){
    return num1/num2;
}

//3
function operate(numb1,operator,numb2){
    if(operator == "+"){
        return add(numb1,numb2);
    }
    else if(operator == "-"){
        return subtract(numb1,numb2);
    }
    else if(operator == "*"){
        return multiply(numb1,numb2);
    }
    else if(operator == "/"){
        return divide(numb1,numb2);
    }
}

const button = document.querySelector("button")

button.addEventListener('click',function(event){
    if(event.target.tagName === "BUTTON"){
        let buttonId = event.target.id;

        switch(buttonId){
            case "0":numb1=0;break;
            case "1":numb1=1;break;
            case "2":numb1=2;break;
            case "3":numb1=3;break;
            case "4":numb1=4;break;
            case "5":numb1=5;break;
            case "6":numb1=6;break;
            case "7":numb1=7;break;
            case "8":numb1=8;break;
            case "9":numb1=9;break;

            case "+":operator="+";break;
            case "-":operator="-";break;
            case "x":operator="*";break;
            case "/":operator="/";break;

            case "AC":numb1=0;break;
            case "C":numb1=1;break;
        }
    console.log(numb1);
    console.log(operator);
    }
})