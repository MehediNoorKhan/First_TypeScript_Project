class UserInformation {
  userName1: string;
  age1: number;

  constructor(userName1: string, age1: number) {
    (this.userName1 = userName1), (this.age1 = age1);
  }

  display(): void {
    console.log(`username is ${this.userName1} and the age is ${this.age1}`);
  }
}

class Student extends UserInformation {
  private studentId: number;

  constructor(userName1: string, age1: number, studentId: number) {
    super(userName1, age1);
    this.studentId = studentId;
  }

  display(): void {
    console.log(
      `username is ${this.userName1} and the age is ${this.age1} and student ID is ${this.studentId}`
    );
  }

  setStudentId(studentId: number): void {
    this.studentId = studentId;
  }
  getStudentId(): number {
    return this.studentId;
  }
}

let student1 = new Student("Virat", 23, 123456);
student1.setStudentId(654321);
console.log(student1.getStudentId());

student1.display();
