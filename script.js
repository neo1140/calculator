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
        inputs.valueTwo = '';
        inputs.valueOne = '';
        inputs.operator = '';
        return 'No zero division!';
    }
    else {
        answer = calculator.divide(x, y);
    }
    break;
    default: answer = inputs.valueOne;
}
inputs.valueOne = (Math.round(answer * 10000000) / 10000000).toString();
return Math.round(answer * 10000000) / 10000000;
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
            document.activeElement.blur();
        }
        else{
            inputs.valueTwo += button.id;
            display.textContent = inputs.valueTwo;
            document.activeElement.blur();
        }
    });
    }
    else if(button.classList =='operator'){
        button.addEventListener('click', () =>{
            if(inputs.valueOne != '') {
                inputs.operator = button.id;
                display.textContent = inputs.valueOne + inputs.operator;
                document.activeElement.blur();
            }
        });
    }
});
//Adding event listener to the = button to call the operate function
const evaluate = document.getElementById('equal');
evaluate.removeEventListener('click', () =>{
    inputs.operator = button.id;
});
evaluate.addEventListener('click', () =>{
    display.textContent = operate(inputs.valueOne, inputs.valueTwo, inputs.operator);
    inputs.valueTwo = '';
    inputs.operator = '';   
})
// Adding event listener to the clear button
const clear = document.getElementById('clear')
function clearFunction() {
    display.textContent = '0';
    inputs.valueOne ='';
    inputs.valueTwo ='';
    inputs.operator ='';
}
clear.addEventListener('click', () => {
clearFunction();
});
// Adding event listener for the . button
point = document.getElementById('.')
point.addEventListener('click', () => {
    pointFunction();
});
// Adding event listener for the backspace button
back = document.getElementById('c')
back.addEventListener('click', () => {
    backspace()
});
//Keyboard support
document.addEventListener('keyup', (e) => {
    switch(e.key) {
    case 'Enter' :
        display.textContent = operate(inputs.valueOne, inputs.valueTwo, inputs.operator);
        inputs.valueTwo = '';
        inputs.operator = ''; 
        break;
    case 'Backspace' :
        backspace();
        break;
    case '.' :
        pointFunction();
        break
    case 'Escape' :
        clearFunction();
        break
    case '+':
        if(inputs.valueOne != '') {
            inputs.operator = e.key;
            display.textContent = inputs.valueOne + inputs.operator;
            document.activeElement.blur();
        }
    break
    case '-':
        if(inputs.valueOne != '') {
            inputs.operator = e.key;
            display.textContent = inputs.valueOne + inputs.operator;
            document.activeElement.blur();
        }
    break
    case '*':
        if(inputs.valueOne != '') {
            inputs.operator = e.key;
            display.textContent = inputs.valueOne + inputs.operator;
            document.activeElement.blur();
        }
    break
    case '/':
        console.log(e);
        if(inputs.valueOne != '') {
            inputs.operator = e.key;
            display.textContent = inputs.valueOne + inputs.operator;
            document.activeElement.blur();
        }
    break
    default : 
    if(isFinite(e.key))
        if(inputs.operator == ''){
            inputs.valueOne += e.key;
            display.textContent = inputs.valueOne;
            document.activeElement.blur();
        }
        else{
            inputs.valueTwo += e.key;
            display.textContent = inputs.valueTwo;
            document.activeElement.blur();
        }
    break;
}
});
//Backspace Function
function backspace() {
    if(display.textContent.includes('+') || display.textContent.includes('-') || display.textContent.includes('*') || display.textContent.includes('/')){
        inputs.operator = '';
        display.textContent = inputs.valueOne;
    }
    else if(inputs.valueOne == display.textContent){
       deleteArray = Array.from(inputs.valueOne);
       deleteArray.pop();
       inputs.valueOne = deleteArray.join('');
       if(deleteArray.length > 0) {
        display.textContent = inputs.valueOne;
       }
       else{
        display.textContent = '0';
        inputs.valueOne = '';
       }
    };
    if(inputs.valueTwo == display.textContent){
       deleteArray = Array.from(inputs.valueTwo);
       deleteArray.pop();
       inputs.valueTwo = deleteArray.join('');
       if(deleteArray.length > 0) {
        display.textContent = inputs.valueTwo;
       }
       else{
        display.textContent = inputs.valueOne + inputs.operator;
        inputs.valueTwo = '';
       }
    }
}
//Function for . funcionality
function pointFunction() {
    if(inputs.operator == ''){
        if(display.textContent.includes('.')){
            return;
        }
        inputs.valueOne += point.id;
        display.textContent = inputs.valueOne;
    }
    else{
        if(display.textContent.includes('.') && inputs.valueTwo != ''){
            return;
        }
        inputs.valueTwo += point.id;
        display.textContent = inputs.valueTwo;
    }
};
