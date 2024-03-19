function pertenceFibonacci(numero) {
    let a = 0;
    let b = 1;

    while (b <= numero) {
        if (b === numero) {
            return true;
        }
        let temp = a + b;
        a = b;
        b = temp;
    }

    return false;
}

const numero = 13;

if (pertenceFibonacci(numero)) {
    console.log(`${numero} pertence à sequência de Fibonacci.`);
} else {
    console.log(`${numero} não pertence à sequência de Fibonacci.`);
}
