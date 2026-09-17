const form = document.getElementById("calculator-form");
const leftInput = document.getElementById("left-number");
const rightInput = document.getElementById("right-number");
const operatorInput = document.getElementById("operator");

function isPositiveInteger(value) {
    return /^\d+$/.test(value.trim());
}

form.addEventListener("submit", function (event) {
    event.preventDefault();

    const leftValue = leftInput.value.trim();
    const rightValue = rightInput.value.trim();
    const operator = operatorInput.value;

    if (!isPositiveInteger(leftValue) || !isPositiveInteger(rightValue)) {
        alert("Error :(");
        return;
    }

    const leftNumber = Number(leftValue);
    const rightNumber = Number(rightValue);

    if ((operator === "/" || operator === "%") && rightNumber === 0) {
        alert("It's over 9000!");
        console.log("It's over 9000!");
        return;
    }

    let result;

    switch (operator) {
        case "+":
            result = leftNumber + rightNumber;
            break;
        case "-":
            result = leftNumber - rightNumber;
            break;
        case "*":
            result = leftNumber * rightNumber;
            break;
        case "/":
            result = leftNumber / rightNumber;
            break;
        case "%":
            result = leftNumber % rightNumber;
            break;
    }

    alert(result);
    console.log(result);

    
    form.reset();
    leftInput.focus();
});

setInterval(function () {
    alert("Please, use me...");
}, 30000);