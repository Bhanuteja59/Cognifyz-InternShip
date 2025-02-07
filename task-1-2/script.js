var body = document.querySelector("body");
var colorChange = document.querySelector(".colorChange");
var header = document.querySelector(".header");
var num1 = document.querySelector(".firstNum");
var num2 = document.querySelector(".secondNum");
var operation = document.querySelector(".operation");
var submit = document.querySelector(".submit");
var output = document.querySelector(".result");


colorChange.addEventListener("click", () => {
    let currentBgColor = window.getComputedStyle(body).backgroundColor;

    if (currentBgColor === "rgb(0, 0, 0)") { // Black in RGB
        body.style.backgroundColor = "white";
        body.style.color = "black";
        colorChange.innerHTML = "Dark Mode";
    } else {
        body.style.backgroundColor = "black";
        body.style.color = "white";
        colorChange.innerHTML = "Light Mode";
    }
});


let currentHour = new Date().getHours();

if (currentHour < 12) {
    alert("Good Morning");
} else if (currentHour >= 12 && currentHour < 18) {
    alert("Good Afternoon");
} else {
    alert("Good Evening");
}


submit.addEventListener("click", () => {
    let number1 = parseFloat(num1.value);
    let number2 = parseFloat(num2.value);
    let selectedOperation = operation.value;
    let result;

    if (isNaN(number1) || isNaN(number2)) {
        alert("Please enter valid numbers");
        return;
    }

    switch (selectedOperation) {
        case "add":
            result = number1 + number2;
            break;
        case "sub":
            result = number1 - number2;
            break;
        case "mul":
            result = number1 * number2;
            break;
        case "div":
            if (number2 === 0) {
                alert("Cannot divide by zero!");
                return;
            }
            result = number1 / number2;
            break;
        default:
            result = "Invalid operation";
    }

    output.innerHTML = `Result: ${result}`;
});
