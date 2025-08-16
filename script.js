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
let currOperator = "";

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

function evaluateFromString(operatorString, num1, num2) {
    switch (operatorString) {
        case "add":
            let ans1 = add(num1, num2);
            num1 = ans1;
            num2 = undefined;
            return ans1;
            break;
        case "multiply":
            let ans2 = multiply(num1, num2);
            num1 = ans2;
            num2 = undefined;
            return ans2;
        case "subtract":
            let ans3 = subtract(num1, num2);
            num1 = ans3;
            num2 = undefined;
            return ans3;
        case "divide":
            let ans4 = divide(num1, num2);
            num1 = ans4;
            num2 = undefined;
            return ans4;
    }
}

button.addEventListener("click", (e) => {
    console.log(e.target.id);
    switch (e.target.id) {
        case "zero":
            (clicker(0)) ? output.textContent = num1 : output.textContent = num2;
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
        case "divide":
            if (!operatorPressed && num1 !== undefined) {
                operatorPressed = true
            }
            else if (operatorPressed && num1 !== undefined && num2 !== undefined) {
                let temp = evaluateFromString(currOperator, num1, num2);
                num1 = temp
                output.textContent = temp;
                num2 = undefined;
                currOperator = "divide";
            }
            if (num1 !== undefined) currOperator = "divide";
            break;
        case "multiply":
            if (!operatorPressed && num1 !== undefined) {
                operatorPressed = true
            }
            else if (operatorPressed && num1 !== undefined && num2 !== undefined) {
                let temp = evaluateFromString(currOperator, num1, num2);
                num1 = temp
                output.textContent = temp;
                num2 = undefined;
            }
            if (num1 !== undefined) currOperator = "multiply";
            break;
        case "subtract":
            if (!operatorPressed && num1 !== undefined) {
                operatorPressed = true
            }
            else if (operatorPressed && num1 !== undefined && num2 !== undefined) {
                let temp = evaluateFromString(currOperator, num1, num2);
                num1 = temp
                output.textContent = temp;
                num2 = undefined;
            }
            if (num1 !== undefined) currOperator = "subtract";
            break;
        case "add":
            if (!operatorPressed && num1 !== undefined) {
                operatorPressed = true
            }
            else if (operatorPressed && num1 !== undefined && num2 !== undefined) {
                let temp = evaluateFromString(currOperator, num1, num2);
                num1 = temp
                output.textContent = temp;
                num2 = undefined;
            }
            if (num1 !== undefined) currOperator = "add";
            break;
        case "equals":
            if (num1 !== undefined) operatorPressed = false;
            if (currOperator === "add") {
                let ans = add(num1, num2);
                output.textContent = ans;
                num1 = ans;
                num2 = undefined;
            }
            else if (currOperator === "multiply") {
                let ans = multiply(num1, num2);
                output.textContent = ans;
                num1 = ans;
                num2 = undefined;
            }
            else if (currOperator === "divide") {
                let ans = divide(num1, num2);
                ans = Math.round(ans * 1000) / 1000;
                output.textContent = ans;
                num1 = ans;
                num2 = undefined;
            }
            else if (currOperator === "subtract") {
                let ans = subtract(num1, num2);
                output.textContent = ans;
                num1 = ans;
                num2 = undefined;
            }
            break;
        case "clear":
            output.textContent = 0;
            num1 = undefined;
            num2 = undefined;
            operatorPressed = false;
            currOperator = "";

    }
});