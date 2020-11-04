"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function add(n1, n2, showResult, phrase) {
    const result = n1 + n2;
    if (showResult) {
        console.log(phrase + result);
    }
    else {
        return result;
    }
}
let number1;
number1 = 5;
const number2 = 2.8;
const printResult = true;
const ResultPhrase = 'Result is: ';
add(number1, number2, printResult, ResultPhrase);
//# sourceMappingURL=basics.js.map