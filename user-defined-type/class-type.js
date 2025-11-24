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
let users1 = new UserInformation("Mehedi", 24);
let users2 = new UserInformation("Javed", 25);
let users3 = new UserInformation("Mahmud", 26);
users1.display();
users2.display();
users3.display();
//# sourceMappingURL=class-type.js.map