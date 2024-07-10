
document.addEventListener("DOMContentLoaded", function () {
    const display = document.querySelector(".calculator-screen");
    const keys = document.querySelector(".calculator-keys");
    const screen = display;
    screen.value = "";

    keys.addEventListener("click", function (event) {
        const target = event.target;
        if (target.classList.contains("all-clear")) {
            clearDisplay();
            return;
        }
        else if (target.classList.contains("del")) {
            deleteValue(target.value);
            return;

        }

        else if (target.classList.contains("number")) {
            updateScreen(target.value);
            return;

        }
        else if (target.classList.contains("operator")) {
            updateScreen(target.value);
            return;

        }
        else if (target.classList.contains("decimal")) {
            updateScreen(target.value);
            return;

        }
        else if (target.classList.contains("equal-sign")) {
            calculate(target.value);
            return;

        }

    });

    function updateScreen(value) {
        if (screen.value === " ") {
            screen.value = value;
        } else {
            screen.value = screen.value + value;

            // console.log((screen.value));
        }
    }
    function deleteValue() {
        screen.value = screen.value.slice(0, -1);

    }

    function clearDisplay() {
        screen.value = " ";
    }



    // screen.value = eval(screen.value);

    function calculate() {
        let expression = screen.value;
        decimalFound = false;


        if (expression[0] === '-') {
            expression = '0' + expression;
        }
        for (let index = 0; index < expression.length; index++) {
            if (expression[index] === ".") {
                decimalFound = true;
                break;
            }


        }
        let splitValues = expression.split(/[+\-*/]/).map(value => {
            if (isNaN(value)) {
                return value;
            } else {
                return Number(value);
            }
        });

        let operators = expression.match(/[+\-*/]/g);


        let result;


        for (let i = 0; i < operators.length; i++) {
            if (operators[i] === '*' || operators[i] === '/') {
                let leftValue = splitValues[i];
                let rightValue = splitValues[i + 1];
                let intermediateResult;

                if (operators[i] === '*') {
                    intermediateResult = leftValue * rightValue;
                } else {
                    intermediateResult = leftValue / rightValue;
                }

                splitValues.splice(i, 2, intermediateResult);
                operators.splice(i, 1);
                i--;
            }
        }


        result = splitValues[0];
        for (let i = 0; i < operators.length; i++) {
            let nextNumber = splitValues[i + 1];
            if (operators[i] === '+') {
                result = result + nextNumber;
            } else if (operators[i] === '-') {
                result = result - nextNumber;
            }
        }


        if (decimalFound) {
            result = Math.round(result * 100) / 100;
            screen.value = result.toFixed(2);
            console.log(result.toFixed(2));

        }
        else {
            console.log(result);
            screen.value = result;

        }


    }



});

// without Bodmasss rule

// let expression = screen.value;
// let operators = expression.match(/[+\-*/]/g);
// let splitValues = expression.match(/\d+/g).map(Number);


// let result = splitValues[0];


// for (let i = 0; i < operators.length; i++) {
//     let nextNumber = splitValues[i + 1];
//     switch (operators[i]) {
//         case '+':
//             result = result + nextNumber;
//             break;
//         case '-':
//             result = result - nextNumber;
//             break;
//         case '*':
//             result = result * nextNumber;
//             break;
//         case '/':
//             result = result / nextNumber;
//             break;
//         default:
//             screen.value = "invalid"
//             throw Error("Unsupported operator: " + operators[i]);
//     }
// }

// console.log(result);
// screen.value = result;

