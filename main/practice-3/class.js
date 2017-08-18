// Write your code here
// const Teacher = require('./teacher');
// const Student = require('./student');
module.exports = class Class {
    constructor(number) {
        this.number = number;
        this.teacher = '';
        this.member = [];
    }
    appendMember(student) {
        this.student = student;
        if (this.teacher) {
            this.teacher.notifyStudentAppended(student);
        }
        this.member.push(student.id);
    }
    assignLeader(student) {
        this.leader = student.name;
        if (this.member.incluldes(student.id)) {
            if (this.teacher) {
                this.teacher.notifyLeaderAssigned(student);
            }
            return "Assign team leader successfully.";

        }
        return "It is not one of us.";
    }
    /*hasStudent(student) {
        return this.member.incluldes(student.id);
    }*/
}
// let clazz = new Class(2);
// let student = new Student("Jerry", 21, clazz);
// let teacher = new Teacher("Tom", 21, [clazz]);
// //spyOn(teacher, 'notifyStudentAppended');
// clazz.appendMember(student);
// console.log(teacher.notifyStudentAppended);