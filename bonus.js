function consoleNumber(num) {
    if (num > 5) {
        return;
    }
    console.log(num)
    consoleNumber(num + 1);
}
consoleNumber(1);

function factorial(num1) {
    if (num1 == 1) {
        return 1;
    }
    return num1 * factorial(--num1);
}
console.log('Factoril of 6 is', factorial(6));