function add(num1, num2) {
    return num1 + num2;
}

function subtract(num1, num2) {
    return num1 - num2;
}

function multiply(num1, num2) {
    return num1 * num2;
}

function divide(num1, num2) {
    return num1 / num2;
}

const button = document.querySelector(".buttonContainer");
const output = document.querySelector(".output")

let num1 = undefined;
let num2 = undefined;
let operatorPressed = false;

function clicker(num) {
    let curr = "numOne"
    if (num1 === undefined && !operatorPressed) num1 = num;
    else if (num1 !== undefined && !operatorPressed) {
        num1 *= 10;
        num1 += num;
    }
    else if (operatorPressed && num2 === undefined) {
        num2 = num;
        curr = "numTwo";
    }
    else if (operatorPressed && num2 !== undefined) {
        num2 *= 10;
        num2 += num;
        curr = "numTwo";
    }
    return (curr === "numOne") ? true : false;

}

button.addEventListener("click", (e) => {
    console.log(e.target.id);
    switch (e.target.id) {
        case "zero":
            output.textContent = 0;
            break;
        case "one":
            (clicker(1)) ? output.textContent = num1 : output.textContent = num2;
            break;
        case "two":
            (clicker(2)) ? output.textContent = num1 : output.textContent = num2;
            break;
        case "three":
            (clicker(3)) ? output.textContent = num1 : output.textContent = num2;
            break;
        case "four":
            (clicker(4)) ? output.textContent = num1 : output.textContent = num2;
            break;
        case "five":
            (clicker(5)) ? output.textContent = num1 : output.textContent = num2;
            break;
        case "six":
            (clicker(6)) ? output.textContent = num1 : output.textContent = num2;
            break;
        case "seven":
            (clicker(7)) ? output.textContent = num1 : output.textContent = num2;
            break;
        case "eight":
            (clicker(8)) ? output.textContent = num1 : output.textContent = num2;
            break;
        case "nine":
            (clicker(9)) ? output.textContent = num1 : output.textContent = num2;
            break;
    }
});