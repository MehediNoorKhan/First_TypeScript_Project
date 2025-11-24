let userss: object[];
userss = [];
type usertype = { name: string; age: number; country: string };
let user1: usertype;
user1 = { name: "robin", age: 19, country: "Bangladesh" };
let user2: usertype;
user2 = { name: "Srestha", age: 20, country: "Bangladesh" };

userss.push(user1);
userss.push(user2);
console.log(userss);
