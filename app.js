// Grabbing all of the buttons and the display
const buttons = document.querySelectorAll('.calculator-button');
const display = document.querySelector('.calculation-display');

let total = 0; // Keeps track of what the resultant will be
let firstNumber = 0; // Holds the first number in the equation
let operation = ''; // Keeps track of what operation will occur
let operatorClicked = 0; // Checking how many times an operator has been clicked
let buttonLastClicked = ''; // Keeps track of the last button clicked

// Loading display to show 0 on page load.
display.innerHTML ='0';

// Event listener that determines which button is pressed on the calculator and then does that button's action
buttons.forEach(button => {
    button.addEventListener('click', () => {

        // Checking which button is pressed based on the class they have in the html file and doing that buttons actions
        if(button.classList.contains('number')) {
            if(buttonLastClicked == '') {
                display.innerHTML = button.innerHTML;
            }
            else if(buttonLastClicked == 'equals') {
                display.innerHTML = button.innerHTML;
            }
            else if(buttonLastClicked == 'number') {
                // if calculator is not displaying '0', add the number clicked to the string being displayed. Max string length < 18 due to size of caclulator style
                if(display.innerHTML != '0'  && display.innerHTML.length < 18) { 
                    display.innerHTML += button.innerHTML;
                } // else if size reaches the max of 18, so nothing and log an error message
                else if(display.innerHTML.length == 18) {
                    console.log('max string length hit');
                }
                else { // else if this is the first number being added to the cleared calculator, set display to that number
                    display.innerHTML = button.innerHTML;
                }
            }
            else if(buttonLastClicked == 'add' || buttonLastClicked == 'subtract' || buttonLastClicked == 'multiply' || buttonLastClicked == 'divide') {
                if(operation == 'add' || operation == 'subtract' || operation == 'multiply' || operation == 'divide') { // if the last button clicked before a number was addition
                    display.innerHTML = button.innerHTML;
                }
            }

            buttonLastClicked = 'number';
        }
        
        else if(button.classList.contains('add')) {
            if(buttonLastClicked == 'add') {
                console.log('Plus was pressed already');
            }
            else if(buttonLastClicked == 'equals') {
                firstNumber = Number(display.innerHTML);
                operation = 'add';
                operatorClicked++;
            }
            else if(buttonLastClicked == 'subtract') {
                operation = 'add';
                operatorClicked++;
            }
            else if(buttonLastClicked == 'multiply') {
                operation = 'add';
                operatorClicked++;
            }
            else if(buttonLastClicked == 'divide') {
                operation = 'add';
                operatorClicked++;
            }
            else {
                if(operatorClicked == 0) { // If no operator has been clicked
                    firstNumber = Number(display.innerHTML);
                    operation = 'add';
                    operatorClicked++;
                }
                else if(operatorClicked >= 1  && operation == 'add') {
                    firstNumber += Number(display.innerHTML);
                    display.innerHTML = firstNumber;
                    operatorClicked++;
                }
                else if(operatorClicked >= 1  && operation == 'subtract') {
                    display.innerHTML = firstNumber - Number(display.innerHTML);
                    firstNumber = Number(display.innerHTML);
                    operation = 'add';
                    operatorClicked++;
                }
                else if(operatorClicked >= 1  && operation == 'multiply') {
                    display.innerHTML = firstNumber * Number(display.innerHTML);
                    firstNumber = Number(display.innerHTML);
                    operation = 'add';
                    operatorClicked++;
                }
                else if(operatorClicked >= 1  && operation == 'divide') {
                    display.innerHTML = firstNumber / Number(display.innerHTML);
                    firstNumber = Number(display.innerHTML);
                    operation = 'add';
                    operatorClicked++;
                }
            }
            buttonLastClicked = 'add';
        }

        else if(button.classList.contains('subtract')) {
            if(buttonLastClicked == 'subtract') {
                console.log('Minus was pressed already')
            }
            else if(buttonLastClicked == 'equals') {
                firstNumber = Number(display.innerHTML);
                operation = 'subtract';
                operatorClicked++;
            }
            else if(buttonLastClicked == 'add') {
                operation = 'subtract';
                operatorClicked++;
            }
            else if(buttonLastClicked == 'multiply') {
                operation = 'subtract';
                operatorClicked++;
            }
            else if(buttonLastClicked == 'divide') {
                operation = 'subtract';
                operatorClicked++;
            }
            else {
                if(operatorClicked == 0) {
                    firstNumber = Number(display.innerHTML);
                    operation = 'subtract';
                    operatorClicked++;
                }
                else if(operatorClicked >= 1  && operation == 'subtract') {
                    firstNumber -= Number(display.innerHTML);
                    display.innerHTML = firstNumber;
                    operatorClicked++;
                }
                else if(operatorClicked >= 1  && operation == 'add') {
                    display.innerHTML = firstNumber + Number(display.innerHTML);
                    firstNumber = Number(display.innerHTML);
                    operation = 'subtract';
                    operatorClicked++;
                }
                else if(operatorClicked >= 1  && operation == 'multiply') {
                    display.innerHTML = firstNumber * Number(display.innerHTML);
                    firstNumber = Number(display.innerHTML);
                    operation = 'subtract';
                    operatorClicked++;
                }
                else if(operatorClicked >= 1  && operation == 'divide') {
                    display.innerHTML = firstNumber / Number(display.innerHTML);
                    firstNumber = Number(display.innerHTML);
                    operation = 'subtract';
                    operatorClicked++;
                }
            }
            buttonLastClicked = 'subtract';
        }
        else if(button.classList.contains('multiply')) {
            if(buttonLastClicked == 'multiply') {
                console.log('Multiply was pressed already');
            }
            else if(buttonLastClicked == 'equals') {
                firstNumber = Number(display.innerHTML);
                operation = 'multiply';
                operatorClicked++;
            }
            else if(buttonLastClicked == 'add') {
                operation = 'multiply';
                operatorClicked++;
            }
            else if(buttonLastClicked == 'subtract') {
                operation = 'multiply';
                operatorClicked++;
            }
            else if(buttonLastClicked == 'divide') {
                operation = 'multiply';
                operatorClicked++;
            }
            else {
                if(operatorClicked == 0) {
                    firstNumber = Number(display.innerHTML);
                    operation = 'multiply';
                    operatorClicked++;
                }
                else if(operatorClicked >= 1  && operation == 'multiply') {
                    firstNumber *= Number(display.innerHTML);
                    display.innerHTML = firstNumber;
                    operatorClicked++;
                }
                else if(operatorClicked >= 1  && operation == 'add') {
                    display.innerHTML = firstNumber + Number(display.innerHTML);
                    firstNumber = Number(display.innerHTML);
                    operation = 'multiply';
                    operatorClicked++;
                }
                else if(operatorClicked >= 1  && operation == 'subtract') {
                    display.innerHTML = firstNumber - Number(display.innerHTML);
                    firstNumber = Number(display.innerHTML);
                    operation = 'multiply';
                    operatorClicked++;
                }
                else if(operatorClicked >= 1  && operation == 'divide') {
                    display.innerHTML = firstNumber / Number(display.innerHTML);
                    firstNumber = Number(display.innerHTML);
                    operation = 'multiply';
                    operatorClicked++;
                }
            }
            buttonLastClicked = 'multiply';
        }
        else if(button.classList.contains('divide')) {
            if(buttonLastClicked == 'divide') {
                console.log('Divide was pressed already')
            }
            else if(buttonLastClicked == 'equals') {
                firstNumber = Number(display.innerHTML);
                operation = 'divide';
                operatorClicked++;
            }
            else if(buttonLastClicked == 'add') {
                operation = 'divide';
                operatorClicked++;
            }
            else if(buttonLastClicked == 'subtract') {
                operation = 'divide';
                operatorClicked++;
            }
            else if(buttonLastClicked == 'multiply') {
                operation = 'divide';
                operatorClicked++;
            }
            else {
                if(operatorClicked == 0) {
                    firstNumber = Number(display.innerHTML);
                    operation = 'divide';
                    operatorClicked++;
                }
                else if(operatorClicked >= 1  && operation == 'divide') {
                    firstNumber /= Number(display.innerHTML);
                    display.innerHTML = firstNumber;
                    operatorClicked++;
                }
                else if(operatorClicked >= 1  && operation == 'add') {
                    display.innerHTML = firstNumber + Number(display.innerHTML);
                    firstNumber = Number(display.innerHTML);
                    operation = 'divide';
                    operatorClicked++;
                }
                else if(operatorClicked >= 1  && operation == 'subtract') {
                    display.innerHTML = firstNumber - Number(display.innerHTML);
                    firstNumber = Number(display.innerHTML);
                    operation = 'divide';
                    operatorClicked++;
                }
                else if(operatorClicked >= 1  && operation == 'multiply') {
                    display.innerHTML = firstNumber * Number(display.innerHTML);
                    firstNumber = Number(display.innerHTML);
                    operation = 'divide';
                    operatorClicked++;
                }
            }
            buttonLastClicked = 'divide';
        }
        else if(button.classList.contains('decimal')) {
            if(buttonLastClicked == '') {
                display.innerHTML = `0${button.innerHTML}`;
            }
            else if(buttonLastClicked == 'equals') {
                display.innerHTML = `0${button.innerHTML}`;
            }
            else if(buttonLastClicked == 'number') {
                if(display.innerHTML.includes('.')) {
                    console.log('Decimal has already been entered')
                }
                else {
                    if(display.innerHTML != '0'  && display.innerHTML.length < 18) { 
                        display.innerHTML += button.innerHTML;
                    }
                    else if(display.innerHTML.length == 18) {
                        console.log('max string length hit');
                    }
                    else {
                        display.innerHTML = `0${button.innerHTML}`;
                    }
                }
            }
            else if(buttonLastClicked == 'add' || buttonLastClicked == 'subtract' || buttonLastClicked == 'multiply' || buttonLastClicked == 'divide') {
                if(operation == 'add' || operation == 'subtract' || operation == 'multiply' || operation == 'divide') { // if the last button clicked before a number was addition
                    display.innerHTML = `0${button.innerHTML}`;
                }
            }

            buttonLastClicked = 'number';
        }
        else if(button.classList.contains('equal')) {
            if(buttonLastClicked == 'add' || buttonLastClicked == 'subtract' || buttonLastClicked == 'multiply' || buttonLastClicked == 'divide') {
                console.log("An operator was last clicked before pressing '='");
            }
            else {
                if(operation == 'add') {
                    firstNumber += Number(display.innerHTML);
                    display.innerHTML = firstNumber;
                    operation = 'equals';
                    operatorClicked = 0;
                }
                else if(operation == 'subtract') {
                    firstNumber -= Number(display.innerHTML);
                    display.innerHTML = firstNumber
                    operation = 'equals';
                    operatorClicked = 0;
                }
                else if(operation == 'multiply') {
                    firstNumber *= Number(display.innerHTML);
                    display.innerHTML = firstNumber
                    operation = 'equals';
                    operatorClicked = 0;
                }
                else if(operation == 'divide') {
                    total = firstNumber /= Number(display.innerHTML);
                    display.innerHTML = firstNumber
                    operation = 'equals';
                    operatorClicked = 0;
                }
                buttonLastClicked = 'equals';
            }
        }
        else if(button.classList.contains('clear')) {
            // Resetting all variables back to 0 (restarting calculator)
            display.innerHTML = '0';
            operatorClicked = 0;
            firstNumber = 0;
            total = 0;
            operation = '';
            buttonLastClicked = '';
        }
    });
});