function inverterString(str) {
    let invertedString = '';

    // Loop de trás para frente pela string
    for (let i = str.length - 1; i >= 0; i--) {
        invertedString += str[i];
    }

    return invertedString;
}
const minhaString = 'Olá, mundo!';
const stringInvertida = inverterString(minhaString);
console.log(stringInvertida);
