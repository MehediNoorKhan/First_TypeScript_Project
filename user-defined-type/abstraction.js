"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class UserInformation1 {
    userName1;
    age1;
    constructor(userName1, age1) {
        (this.userName1 = userName1), (this.age1 = age1);
    }
}
class Students extends UserInformation1 {
    studentId;
    constructor(userName1, age1, studentId) {
        super(userName1, age1);
        this.studentId = studentId;
    }
    display() {
        console.log(`username is ${this.userName1} and the age is ${this.age1} and student ID is ${this.studentId}`);
    }
}
let students1 = new Students("Virat", 23, 123456);
students1.display();
//# sourceMappingURL=abstraction.js.map