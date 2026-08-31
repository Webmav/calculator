//2
let numb1;
let numb2;
let operator;
let last;

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

const buttons = document.querySelectorAll("button")

//Now
/*

buttons.forEach((button)=>{
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
            case "AC":numb1=0,numb2=0,operator="",last=0;break
            case "=":last = operate(numb1,operator,numb2);break;
        }
        log.textContent = `${numb1}`

        switch(buttonId){
            case "+":operator="+";break;
            case "-":operator="-";break;
            case "x":operator="*";break;
            case "/":operator="/";break;

            case "AC":numb1=0,numb2=0,operator="",last=0;break
            case "=":last = operate(numb1,operator,numb2);break;
        }
        log.textContent = `${numb1} ${operator} `

        switch(buttonId){
            case "0":numb2=0;break;
            case "1":numb2=1;break;
            case "2":numb2=2;break;
            case "3":numb2=3;break;
            case "4":numb2=4;break;
            case "5":numb2=5;break;
            case "6":numb2=6;break;
            case "7":numb2=7;break;
            case "8":numb2=8;break;
            case "9":numb2=9;break;

            case "+":operator="+";break;
            case "-":operator="-";break;
            case "x":operator="*";break;
            case "/":operator="/";break;

            case "AC":numb1=0,numb2=0,operator="",last=0;break
            case "=":last = operate(numb1,operator,numb2);break;
        }
        log.textContent = `${numb1} ${operator} ${numb2} = ${last} `

    console.log(numb1);
    console.log(operator);
    console.log(numb2);
    console.log(last);
    }
})})

*/

const log = document.querySelector("#log");

let totalClicks = 0;
buttons.forEach((button)=>{
    button.addEventListener('click',function(event){
        totalClicks++;
        if(event.target.tagName==="BUTTON"){
        let buttonId = event.target.id;

            let turn = totalClicks%4;
            if(buttonId==="AC"){
                switch(buttonId){
                    case "AC":numb1=0,numb2=0,operator="",last=0,targetClicks = 0;break;
                }
            }
            if(turn===1){
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

                case "=":last = operate(numb1,operator,numb2);break;
                }
                log.textContent = `${numb1}`
            }
            else if(turn===2){
                switch(buttonId){
                    case "+":operator="+";break;
                    case "-":operator="-";break;
                    case "x":operator="*";break;
                    case "/":operator="/";break;

                    case "=":last = operate(numb1,operator,numb2);break;
                }
                log.textContent = `${numb1} ${operator} `
            }
            else if(turn===3){
                switch(buttonId){
                    case "0":numb2=0;break;
                    case "1":numb2=1;break;
                    case "2":numb2=2;break;
                    case "3":numb2=3;break;
                    case "4":numb2=4;break;
                    case "5":numb2=5;break;
                    case "6":numb2=6;break;
                    case "7":numb2=7;break;
                    case "8":numb2=8;break;
                    case "9":numb2=9;break;

                    case "+":operator="+";break;
                    case "-":operator="-";break;
                    case "x":operator="*";break;
                    case "/":operator="/";break;

                    case "=":last = operate(numb1,operator,numb2);break;
                }
                log.textContent = `${numb1} ${operator} ${numb2} `
            }
            else if(turn===0){
                switch(buttonId){
                    case "=":last = operate(numb1,operator,numb2);break;
                }
                log.textContent = `${numb1} ${operator} ${numb2} = ${last} `
            }
            if(totalClicks>=4){
                totalClicks = 0;
            }

        }
    })
})