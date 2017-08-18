// Write your code here
module.exports = class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    introduce() {
        return(`My name is ${this.name}. I am ${this.age} years old.`);
    }
}

// let person = new Person("Tom", 21);
// console.log(person.name);
// console.log(person.age);

