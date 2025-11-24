abstract class UserInformation1 {
  userName1: string;
  age1: number;

  constructor(userName1: string, age1: number) {
    (this.userName1 = userName1), (this.age1 = age1);
  }

  abstract display(): void 
}

class Students extends UserInformation1 {
  studentId: number;

  constructor(userName1: string, age1: number, studentId: number) {
    super(userName1, age1);
    this.studentId = studentId;
  }

  display(): void {
    console.log(
      `username is ${this.userName1} and the age is ${this.age1} and student ID is ${this.studentId}`
    );
  }
}

let students1 = new Students("Virat", 23, 123456);

students1.display();
