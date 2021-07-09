const calculator = {
    add: (x, y) => x + y,
    subtract: (x, y) => x - y,
    multiply: (x, y) => x * y,
    divide: (x, y) => x / y,
};
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
return answer;
}