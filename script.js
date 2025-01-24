const calculatorScreen = document.querySelector('.calculator-screen');
const buttons = document.querySelectorAll('.button');

let currentInput = '';
let operator = '';
let previousInput = '';

buttons.forEach(button => {
    button.addEventListener('click', () => {
        const value = button.value;

        if (value === '=') {
            if (currentInput && previousInput) {
                currentInput = eval(`${previousInput}${operator}${currentInput}`);
                calculatorScreen.value = currentInput;
                previousInput = '';
                operator = '';
            }
        } else if (value === '+' || value === '-' || value === '*' || value === '/') {
            if (currentInput) {
                previousInput = currentInput;
                operator = value;
                currentInput = '';
            }
        } else {
            currentInput += value;
            calculatorScreen.value = currentInput;
        }
    });
});