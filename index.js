const display = document.querySelector(".display");
const buttons = document.querySelectorAll("button");

function add(a, b){
    return (a + b);
}

function suptract(a, b){
    return (a - b);
}

function multiply (a, b){
    return (a * b);
}

function divide(a, b){
    return (a / b);
}

let firstNumber = 0;
let oparator
let secondNumber

function oparate(num, opr, num2){
    const result = 0;
    //running one of the function on these two numbers
    if(opr === "+"){
        result = add(num, num2);
        return result;
    }else if(opr === "-"){
        result = suptract(num, num2);
        return result;
    }else if (opr === "*"){
        result = multiply(num, num2);
        return result;
    }else if (opr === "/"){
        result = divide(num, num2);
        return result;
    }
}


display.textContent = "";


function populate(){
    buttons.forEach((button) => {
        button.addEventListener("click", (e) => {
            display.textContent = e.target.textContent; 
        });
    })
}
populate();

for(let i = 0; i < 3; i++){

}