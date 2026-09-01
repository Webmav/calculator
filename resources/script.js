//2
const buttons = document.querySelectorAll("button")
const log = document.querySelector("#log")

let numb1 = "";
let numb2 = "";
let numb1last;
let numb2last; 
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
    else if(operator == "x"){
        return multiply(numb1,numb2);
    }
    else if(operator == "/"){
        if (numb2 === 0){
            alert("ERROR! Don't divide by zero");
            return numb2 = 0;
        }
        else {
        return divide(numb1,numb2);
        }
    }
}

buttons.forEach((button)=>{
    button.addEventListener('click',function(event){

    //For accepting or gives a variable the id of the button clicked
        if(event.target.tagName==="BUTTON"){
            let buttonId = event.target.id;

        //For multiple operation without clicking '='
            out: if(
                (buttonId==="+" || buttonId==="-" || buttonId==="x" || buttonId==="/")&&
                (numb1last!==undefined)&&
                (numb2last!==undefined)&&
                (operator!==undefined)
                ){  

                operator = buttonId;

                if(buttonId==="+"){
                    numb1last += numb2last;
                    numb1last = Math.round(numb1last*100)/100;
                }
                if(buttonId==="-"){
                    numb1last -= numb2last;
                    numb1last = Math.round(numb1last*100)/100;
                }
                if(buttonId==="x"){
                    numb1last *= numb2last;
                    numb1last = Math.round(numb1last*100)/100;
                }
                if(buttonId==="/"){
                    numb1last /= numb2last;
                    numb1last = Math.round(numb1last*100)/100;
                }
                numb2 = "";
                last = numb1last;
                log.textContent = last;

            }
        //For clearing all variables
            else if(buttonId==="AC"){
            switch(buttonId){
                    case "AC":numb1="",numb2="",operator=undefined,
                                numb1last=0,numb2last=0,last=0;break;
                }
                log.textContent = "";
                break out;
            }
        //For operating after clicking '='
            else if(buttonId==="="){
                if(
                    (numb1last == undefined) && 
                    (numb2last == undefined) && 
                    (last == undefined) && 
                    (operator == undefined) )
                    {
                    log.textContent = "Please enter atleast one number";
                }
                else {
                last = operate(numb1last,operator,numb2last);
                last = Math.round(last*100)/100;
                numb1last = last;
                log.textContent = last;
                numb1="";numb2="";last=0;numb2last=0;
                }
            }
        //For accepting second number variable
            else if(operator!==undefined){
                let value = String(buttonId);
                numb2+=value;
                numb2last = Number(numb2);
                log.textContent = numb2last;
            }
        //For accepting first number variable
            else if(!isNaN(buttonId)){
                let value = String(event.target.id);
                numb1+=value;
                numb1last = Number(numb1);
                log.textContent = numb1last;
            }
        //For accepting operator
            else if(isNaN(buttonId)){
                switch(buttonId){
                    case "+":operator="+",numb1=numb1+numb2;break;
                    case "-":operator="-",numb1=numb1+numb2;break;
                    case "x":operator="x",numb1=numb1+numb2;break;
                    case "/":operator="/",numb1=numb1+numb2;break;
                }
            }
        }
    })
})





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
