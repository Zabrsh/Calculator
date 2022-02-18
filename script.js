//Displaying user input on the screen
function display(value) {
    document.getElementById("result").value += value;
   }

//Clearing the screen when a user clicks on clear button
function clearScreen() {
    document.getElementById("result").value = "";
   }

//Function of computation
function add(num1,num2) {
       
    let result = num1 + num2;
    return result;
}

function subtract(num1,num2) {
    let result = num1 - num2;

    return result;
}

function multiply(num1,num2) {
    let result = num1 * num2;

    return result;
}

function divide(num1,num2) {
    if(num2 != 0 ) {
        return num1/num2;
    } else return 'Error';

}

//Function responsible for selecting the computation type based on operators
function operate(num1,num2,operator) {
   
    if(operator == '+') return add(num1,num2);
    else if(operator == '-') return subtract(num1,num2);
    else if(operator == '*') return multiply(num1,num2);
    else if(operator == '/') return divide(num1,num2);
    else return 'Error';
    
}
    


//The function that is called when a user cliccks on equaity sign.
// It fires up operate function by passing neccessary arguments
function calculate() {
    
    let expression = document.getElementById('result').value;
    let num1;
    let num2;
    let operator;
    let i;
    for(i = 0; i <= expression.length; i++) {
        if(expression.charAt(i) == '+' || expression.charAt(i) == '-'  || expression.charAt(i) == '*'  || expression.charAt(i) == '/' ) {

            operator = expression.charAt(i);
            num1 = expression.slice(0,i);
            num2 = expression.slice(++i);
            
        }
            
    }
    
    num1 = Number(num1);
    num2 = Number(num2);
    console.log(operator);
    document.getElementById("result").value = operate(num1,num2,operator);
 
}

