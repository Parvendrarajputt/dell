
function factorial(n) {
    
        let fact = 1;
        for (let i = 2; i <= n; i++) {
            fact =fact* i;
        }
        return fact;
}
function isStrongNumber(num) {
    let originalNum = num;
    let sumOfFactorials = 0;

    while (num > 0) {
        let digit = num % 10;
        sumOfFactorials += factorial(digit);
        num = Math.floor(num / 10);
    }

    return sumOfFactorials === originalNum;
}


let number =145;
if (isStrongNumber(number)) {
    console.log(number + " is a strong number.");
} else {
    console.log(number + " is not a strong number.");
}