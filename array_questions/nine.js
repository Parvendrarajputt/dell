function countDigits(num) {
    let count = 0;
    let temp = num;
    while (temp > 0) {
        count++;
        temp = Math.floor(temp / 10);
    }
    return count;
}

function power(base, exponent) {
    let result = 1;
    for (let i = 0; i < exponent; i++) {
        result =result* base;
    }
    return result;
}

function isArmstrongNumber(num) {
    let sum = 0;
    let temp = num;
    const numberOfDigits = countDigits(num);

    while (temp > 0) {
        let digit = temp % 10;
        sum =sum+ power(digit, numberOfDigits);
        temp = Math.floor(temp / 10);
    }

    return sum === num;
}



const number = 371;
if (isArmstrongNumber(number)) {
    console.log(number + " is an Armstrong number.");
} else {
    console.log(number + " is not an Armstrong number.");
}