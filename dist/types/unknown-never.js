"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let userInput;
let userName;
userInput = 5;
userInput = 'Max';
if (typeof userInput === 'string') {
    userName = userInput;
}
function generateError(message, code) {
    throw { message: message, errorCode: code };
}
generateError('An error occured', 500);
//# sourceMappingURL=unknown-never.js.map