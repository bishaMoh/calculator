const numbers = document.querySelectorAll(".number-raw");
const display = document.querySelector(".display");
const operators = document.querySelectorAll(".oparator");
const equals = document.querySelector(".oparator-equal");
const clean = document.querySelector(".oparator-clear");

 // the oparation copponents
 let firstNumber = "";
 let secondNumber = "";
 let currentOparation = null;
 let shouldResetScreen = false;

function operate(operator, a, b) {
    a = Number(a);
    b = Number(b);
    switch (operator) {
      case "+":
        return a + b;
      case "-":
        return a - b;
      case "*":
        return a * b;
      case "/":
        return b === 0 ? "Error" : a / b;
      default:
        return null;
    }
  }

numbers.forEach((numberButton) => {
  numberButton.addEventListener("click", () => appendNumber(numberButton.textContent));
});

operators.forEach((button) => {
  button.addEventListener("click", () => setOparation(button.textContent));
});
 
equals.addEventListener("click", evaluate);
clean.addEventListener("click", clear);

function appendNumber(number) {
  if (shouldResetScreen || display.textContent === "0") {
      display.textContent = number;
      shouldResetScreen = false;
  } else {
      display.textContent += number;
  }
}

  function setOparation(opr) {
    if (currentOparation !== null && !shouldResetScreen) {
        evaluate();
    }
    firstNumber = display.textContent;
    currentOparation = opr;
    shouldResetScreen = true;
}




  function evaluate() {
    if (currentOparation === null) return;
    secondNumber = display.textContent;
    const result = operate(currentOparation, Number(firstNumber), Number(secondNumber));
    
    display.textContent = result;
    firstNumber = result; // Store result for next operation
    currentOparation = null;
    shouldResetScreen = true;
}


  function clear() {
    firstNumber = "";
    secondNumber = "";
    currentOparation = null;
    shouldResetScreen = false;
    display.textContent = "0";
}