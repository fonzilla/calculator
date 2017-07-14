let num = [];
let firstNum;
let secondNum;
let operation;

let operands = {
  "+": "sum",
  "-": "subtract",
  "*": "multiply",
  "/": "divide"
}

let myFunction = function(value) {
  num.push(value);
  document.querySelector('.input').setAttribute('value', num.join(''));
}

let calc = function(value) {
  if (operation) {
    equals(value);
  } else {
    operation = operands[value];
    if (num.length > 0) {
      firstNum = parseFloat(num.join(''));
    }
    num = [];
    // console.log(num);
    document.querySelector('.input').setAttribute('value', num.join(''));
  }
}

let clearFunc = function() {
  num = [];
  firstNum = 0;
  secondNum = 0;
  operation = '';
  document.querySelector('.input').setAttribute('value', '');
}

let equals = function(value) {
  secondNum = parseFloat(num.join(''));
  num = [];
  switch (operation) {
    case "sum":
      document.querySelector('.input').setAttribute('value', firstNum + secondNum);
      firstNum = firstNum + secondNum;
      secondNum = 0;
      operation = operands[value];
      break;
    case "subtract":
      document.querySelector('.input').setAttribute('value', firstNum - secondNum);
      firstNum = firstNum - secondNum;
      secondNum = 0;
      operation = operands[value];
      break;
    case "multiply":
      document.querySelector('.input').setAttribute('value', firstNum * secondNum);
      firstNum = firstNum * secondNum;
      secondNum = 0;
      operation = operands[value];
      break;
    case "divide":
      document.querySelector('.input').setAttribute('value', firstNum / secondNum);
      firstNum = firstNum / secondNum;
      secondNum = 0;
      operation = operands[value];
      break;
    default:

  }

}
