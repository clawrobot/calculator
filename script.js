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

button.addEventListener("click", (e) => {
    console.log(e.target.id);
    switch (e.target.id) {
        case "zero":
            output.textContent = 0;
            break;
        case "one":
            output.textContent = 1;
            break;
        case "two":
            output.textContent = 2;
            break;
        case "three":
            output.textContent = 3;
            break;
        case "four":
            output.textContent = 4;
            break;
        case "five":
            output.textContent = 5;
            break;
        case "six":
            output.textContent = 6;
            break;
        case "seven":
            output.textContent = 7;
            break;
        case "eight":
            output.textContent = 8;
            break;
        case "nine":
            output.textContent = 9;
    }
});