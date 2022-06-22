// basic arithmetic calculator
// It should be able to perform basic operations like +, -, *, & /

// ask user for the operator
const operator = prompt('Enter operator ( +, -, * or / ): '),

// ask user for the operands
      firstNum = parseFloat(prompt('Enter first number: ')),
      secondNum = parseFloat(prompt('Enter second number: '));

let result;

// calculation operations
if (operator == '+') {
    result = firstNum + secondNum;
}
else if (operator == '-') {
    result = firstNum - secondNum;
}
else if (operator == '*') {
    result = firstNum * secondNum;
}
else if (operator == '/') {
    result = firstNum / secondNum;
}
else {
    alert("Invalid operator")
}

// display the result
alert(`${firstNum} ${operator} ${secondNum} = ${result}`);
console.log(`${firstNum} ${operator} ${secondNum} = ${result}`);