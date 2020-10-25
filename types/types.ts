// const person: {
//     name: string;
//     age: number;
//     hobbies: string[];
//     role: [number, string];
// } = {
//     name: "Nicolas",
//     age: 26,
//     hobbies: ['Sports', "Cooking"],
//     role: [2, "author"]
// };

// const ADMIN = 0;
// const READ_ONLY = 1;

enum Role { ADMIN = 5, READ_ONLY, AUTHOR};

const person = {
    name: "Nicolas",
    age: 26,
    hobbies: ['Sports', "Cooking"],
    role: Role.ADMIN
};

let favoriteActivities: string[];

favoriteActivities = ["Sports"];

console.log(person.name);

for (const hobby of person.hobbies) {
    console.log(hobby.toUpperCase());
}

if (person.role === Role.ADMIN) {
    console.log("is read only");
}