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
    case '+': answer = calculator.add(x, y);
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
console.log(answer);
}
//Adding event listener to all the buttons except for the = button
const buttons = document.querySelectorAll('button');    
buttons.forEach((button) => {
    if(isFinite(button.id)){
    button.addEventListener('click', () => {
        if(inputs.operator == ''){
            inputs.valueOne += button.id; 
        }
        else
            inputs.valueTwo += button.id;
    });
    }
    else if(button.classList =='operator'){
        button.addEventListener('click', () =>{
            inputs.operator = button.id;
        });
    }
});
//Adding event listener to the = button to call the operate function
const evaluate = document.getElementById('=');
evaluate.removeEventListener('click', () =>{
    inputs.operator = button.id;
});
evaluate.addEventListener('click', () =>{
    operate(inputs.valueOne, inputs.valueTwo, inputs.operator);
})

