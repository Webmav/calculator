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