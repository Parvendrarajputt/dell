function primeFactors(n) {
    const factors = [];
    let divisor = 2;

    while (n >= 2) {
        if (n % divisor === 0) {
            factors.push(divisor);
            n = n / divisor;
        } else {
            divisor++;
        }
    }

    return factors;
}


const number = 66;
const factors = primeFactors(number);
console.log(factors); 
