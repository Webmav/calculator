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

            let turn = totalClicks%8;

            if(buttonId==="AC"){
                switch(buttonId){
                    case "AC":numb1=0,numb2=0,operator="",last=0,targetClicks = 0;break;
                }
            }

            else if(turn===1){
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
                }
                log.textContent = `${numb1}`;
            }
            else if(turn===2){
                switch(buttonId){
                    case "+":operator="+";break;
                    case "-":operator="-";break;
                    case "x":operator="*";break;
                    case "/":operator="/";break;
                }
                log.textContent = `${numb1} ${operator} `;
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
                }
                log.textContent = `${numb1} ${operator} ${numb2} `;
            }


            else if(turn===4){
                if(buttonId=="="){
                    switch(buttonId){
                        case "=":last = operate(numb1,operator,numb2);break;
                    }
                    log.textContent = `${numb1} ${operator} ${numb2} = ${last} `;
                }
                else{
                    switch(buttonId){
                        case "+":operator="+",numb1=numb1+numb2;break;
                        case "-":operator="-",numb1=numb1+numb2;break;
                        case "x":operator="x",numb1=numb1+numb2;break;
                        case "/":operator="/",numb1=numb1+numb2;break;

                        case "=":last = operate(numb1,operator,numb2);break;
                    }
                    log.textContent = `${numb1} ${operator} `;
                }
            }
            else if(turn===5){
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
                }
                    log.textContent = `${numb1} ${operator} ${numb2} `;
            }
            else if(turn===6){
                if(buttonId=="="){
                    switch(buttonId){
                        case "=":last = operate(numb1,operator,numb2);break;
                    }
                    log.textContent = `${numb1} ${operator} ${numb2} = ${last} `;
                }
                else{
                    switch(buttonId){
                        case "+":numb1=numb1+numb2,operator="+";break;
                        case "-":numb1=numb1-numb2,operator="-";break;
                        case "x":numb1=numb1*numb2,operator="*";break;
                        case "/":numb1=numb1/numb2,operator="/";break;

                        case "=":last = operate(numb1,operator,numb2);break;
                    }
                    log.textContent = `${numb1} ${operator} `;
                }
            }
            else if(turn===7){
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
                }
                    log.textContent = `${numb1} ${operator} ${numb2} `;
            }
            else if(turn===0){
                if(buttonId=="="){
                    switch(buttonId){
                        case "=":last = operate(numb1,operator,numb2);break;
                    }
                    log.textContent = `${numb1} ${operator} ${numb2} = ${last} `;
                }
                else{
                    switch(buttonId){
                        case "+":numb1=numb1+numb2,operator="+";break;
                        case "-":numb1=numb1-numb2,operator="-";break;
                        case "x":numb1=numb1*numb2,operator="*";break;
                        case "/":numb1=numb1/numb2,operator="/";break;

                        case "=":last = operate(numb1,operator,numb2);break;
                    }
                    log.textContent = `${numb1} ${operator} `;
                }
            }
        }
    })
})

//Now
//Make it so that variables accept two digits.
//tweak code to perform like normal calc
//add comments

//Bugs --
/* Your calculator should not evaluate more than a single pair of numbers at a time. 
For example, this is how your calculator should function:
Enter a number (12).
Enter an operator (+).
Enter a second number (7).
Enter a second operator (-). At this point, it should evaluate the initial pair of numbers (12 + 7), then 
...display the result (19).
Enter another number (1).
Enter another operator or equals sign (=). At this point, it should use the previous result (19) as the 
...first number, the operator (-), and the new number (1) to calculate the new equation 19 - 1. You should see 
...the result (18) on the display.
To see what this looks like in action, feel free to input the equation we just explained 12 + 7 - 1 = into this
...online calculator(https://www.calculatorsoup.com/calculators/math/basic.php). 
*/

//You should round answers with long decimals so that they don’t overflow the display
//Pressing = before entering all of the numbers or an operator could cause problems!
//Pressing “clear” should wipe out any existing data. Make sure the user is really starting fresh after 
// ...pressing “clear”
//Display a snarky error message if the user tries to divide by 0… and don’t let it crash your calculator!
//Make sure that your calculator only runs an operation when supplied with two numbers and an operator by the 
// ...user. Example: you enter a number (2), followed by an operator button (+). You press the operator button (+)
// ...a second consecutive time. Your calculator should not evaluate this as (2 + 2) and should not display 
// ...the result (4). If consecutive operator buttons are pressed, your calculator should not run any 
// ...evaluations, it should only take the last operator entered to be used for the next operation.
//When a result is displayed, pressing a new digit should clear the result and start a new calculation 
// ...instead of appending the digit to the existing result. Check whether this is the case on your calculator!

//Extras
//Users can get floating point numbers if they do the math required to get one, but they can’t type 
// ...them in yet. Add a . button and let users input decimals! Make sure you don’t let them type more than 
// ...one though, like: 12.3.56.5. Disable the . button if there’s already a decimal separator in the display.
//Add a “backspace” button, so the user can undo their last input if they click the wrong number.
//Add keyboard support!
