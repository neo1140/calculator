//Object holding all the mathmatical functions
const calculator = {
    add: (x, y) => x + y,
    subtract: (x, y) => x - y,
    multiply: (x, y) => x * y,
    divide: (x, y) => x / y,
};
//Object holding the users input
const inputs = {
    valueOne: '',
    valueTwo: '',
    operator: '',
};
//Function that calls the proper calculator function using user inputs
function operate(x, y, operator) {
let answer;
switch(operator) {
    case '+': answer = calculator.add(parseFloat(x), parseFloat(y));
    break;
    case '-': answer = calculator.subtract(x, y);
    break;
    case '*': answer = calculator.multiply(x, y);
    break;
    case '/': 
    if(y == 0) {
        alert('You goof! You can\'t divide by zero!');
    }
    else {
        answer = calculator.divide(x, y);
    }
    break;
    default: answer = 0;
}
answer.toFixed(8);
inputs.valueOne = answer;
return answer;
}
//Adding animation to button clicks
const buttons = document.querySelectorAll('button');
const display = document.getElementById('display');
buttons.forEach((button) =>{
    button.addEventListener('click', () =>{
        button.classList.add('clicked');
    });
});
buttons.forEach(button => button.addEventListener('transitionend', removeTransition));
function removeTransition(e) {
    if (e.propertyName !== 'transform') return;
    e.target.classList.remove('clicked');
  }
  //Adding event listener to all the buttons except for the = button
buttons.forEach((button) => {
    if(isFinite(button.id)){
    button.addEventListener('click', () => {
        if(inputs.operator == ''){
            inputs.valueOne += button.id;
            display.textContent = inputs.valueOne;
        }
        else{
            inputs.valueTwo += button.id;
            display.textContent = inputs.valueTwo;
        }
    });
    }
    else if(button.classList =='operator'){
        button.addEventListener('click', () =>{
            if(inputs.valueOne != '') {
                inputs.operator = button.id;
            }
        });
    }
});
//Adding event listener to the = button to call the operate function
const evaluate = document.getElementById('=');
evaluate.removeEventListener('click', () =>{
    inputs.operator = button.id;
});
evaluate.addEventListener('click', () =>{
    display.textContent =   operate(inputs.valueOne, inputs.valueTwo, inputs.operator);;
    inputs.valueTwo = '';
    inputs.operator = '';
    
})

