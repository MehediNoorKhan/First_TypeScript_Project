"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class UserInformation {
    userName1;
    age1;
    constructor(userName1, age1) {
        (this.userName1 = userName1), (this.age1 = age1);
    }
    display() {
        console.log(`username is ${this.userName1} and the age is ${this.age1}`);
    }
}
class Student extends UserInformation {
    studentId;
    constructor(userName1, age1, studentId) {
        super(userName1, age1);
        this.studentId = studentId;
    }
    display() {
        console.log(`username is ${this.userName1} and the age is ${this.age1} and student ID is ${this.studentId}`);
    }
}
let student1 = new Student("Virat", 23, 123456);
student1.display();
//# sourceMappingURL=inheritence.js.map