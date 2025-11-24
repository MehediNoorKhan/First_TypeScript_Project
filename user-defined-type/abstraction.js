var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var UserInformation1 = /** @class */ (function () {
    function UserInformation1(userName1, age1) {
        (this.userName1 = userName1), (this.age1 = age1);
    }
    return UserInformation1;
}());
var Students = /** @class */ (function (_super) {
    __extends(Students, _super);
    function Students(userName1, age1, studentId) {
        var _this = _super.call(this, userName1, age1) || this;
        _this.studentId = studentId;
        return _this;
    }
    Students.prototype.display = function () {
        console.log("username is ".concat(this.userName1, " and the age is ").concat(this.age1, " and student ID is ").concat(this.studentId));
    };
    return Students;
}(UserInformation1));
var students1 = new Students("Virat", 23, 123456);
students1.display();
