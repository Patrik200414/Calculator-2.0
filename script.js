

class Calculator{
    constructor(previousOperandandTextElement, currentOperandandTextElement){
        this.previousOperandandTextElement = previousOperandandTextElement;
        this.currentOperandandTextElement = currentOperandandTextElement;
        this.clear();
    }
    
    clear(){
        this.currentOperand = '';
        this.previousOperand = '';
        this.operation = '';
    }
    delete(){}
    appendNumber(number){
        this.currentOperand = number
    }
    chooseOperation(operation){}
    compute(){}
    updateDisplay(){
        this.currentOperandandTextElement.innerText = this.currentOperand
    }
}








const numberButtons = document.querySelectorAll('[data-number]');
const operationButtons = document.querySelectorAll('[data-operation]');
const equalsButton = document.querySelector('[data-equals]');
const deleteButton = document.querySelector('[data-delete]');
const allClearButton = document.querySelector('[data-all-clear]');
const previousOperandandTextElement = document.querySelector('[data-previous-operand]');
const currentOperandandTextElement = document.querySelector('[data-current-operand]');



const calculator = new Calculator(previousOperandandTextElement, currentOperandandTextElement);
numberButtons.forEach(button => {
    button.addEventListener('click', () => {
        calculator.appendNumber(button.innerText)
        calculator.updateDisplay();
    })
})