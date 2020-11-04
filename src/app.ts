// function add(a: number, b: number) {
//     let result;
//     result = a + b;
//     return result;
// }

// console.log(result);

// if (age > 20) {
//     let isOld = true;
// }

// const add = (a: number, b: number = 10) => a + b;

// console.log(add(8));

// const printOutput = (output: string | number) => {
//     console.log(output);
// }

const button = document.querySelector('button');

if (button) {
    button.addEventListener('click', event => console.log(event));
}

const hobbies = ['Sports', 'Cooking'];
const activeHobbies = ['Hiking', ...hobbies];

activeHobbies.push(...hobbies);

const [hobby1, hobby2, ...remainingHobbies] = hobbies;

console.log(hobbies, hobby1, hobby2);

const person = {
    firstName: 'Max',
    age: 30
}

const copiedPerson = { ...person };

const { firstName: userName, age } = person;
console.log(userName, age);


const add = (...numbers: number[]) => {
    return numbers.reduce((curResult, curValue) => {
        return curResult + curValue;
    }, 0);
}

const addedNumbers = add(5, 10, 7, 8);
console.log(addedNumbers);

