const Person = require('./person');
// const Class = require('./class');

module.exports = class Teacher extends Person{
    constructor(name, age, clazzes) {
        super(name, age);
        this.clazzes = clazzes;
    }
    introduce() {
        if (this.clazzes.length !== 0) {
            return super.introduce() + ` I am a Teacher. I teach Class ${this.clazzes[0].number},${this.clazzes[1].number}.`;
        }
        return super.introduce() + " I am a Teacher. I teach No Class.";
    }
}
// let clazz1 = new Class(2);
// let clazz2 = new Class(3);
// let teacher = new Teacher("Joun", 21, [clazz1, clazz2]);
// console.log(teacher.clazzs);