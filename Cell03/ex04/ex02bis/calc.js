function isPositiveInteger(value) {
    return /^\d+$/.test(value.trim());
}

$("#calculator-form").submit(function (event) {
    event.preventDefault();

    const leftValue = $("#left-number").val().trim();
    const rightValue = $("#right-number").val().trim();
    const operator = $("#operator").val();

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


    $("#calculator-form")[0].reset();
    $("#left-number").focus();
});

setInterval(function () {
    alert("Please, use me...");
}, 30000);