var UserInformation = /** @class */ (function () {
    function UserInformation(userName1, age1) {
        (this.userName1 = userName1), (this.age1 = age1);
    }
    UserInformation.prototype.display = function () {
        console.log("username is ".concat(this.userName1, " and the age is ").concat(this.age1));
    };
    return UserInformation;
}());
var users1 = new UserInformation("Mehedi", 24);
var users2 = new UserInformation("Javed", 25);
var users3 = new UserInformation("Mahmud", 26);
users1.display();
users2.display();
users3.display();
