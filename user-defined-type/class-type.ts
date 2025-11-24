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

let users1 = new UserInformation("Mehedi", 24);
let users2 = new UserInformation("Javed", 25);
let users3 = new UserInformation("Mahmud", 26);

users1.display();
users2.display();
users3.display();
