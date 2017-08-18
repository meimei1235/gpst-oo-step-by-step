const Person = require('./person');
/*const Teacher = require('./teacher');
const Class = require('./class');*/

module.exports = class Student extends Person{
    constructor(name, age, clazz) {
        super(name, age);
        this.clazz = clazz;
    }
    introduce() {
        if (this.clazz.student == undefined && this.clazz.leader == undefined) {
            return super.introduce()+ " I am a Student. I haven't been allowed to join Class.";
        }
        if (this.clazz.student && this.clazz.leader ) {
            return super.introduce() + ` I am a Student. I am Leader of Class ${this.clazz.number}.`
        }
        return super.introduce() + ` I am a Student. I am at Class ${this.clazz.number}.`
    }
}
/*
let clazz = new Class(2);
let student = new Student("Tom", 21, clazz);
let introduce = student.introduce();*/
