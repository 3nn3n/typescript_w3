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
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
function greet(name) {
    return "Hello ".concat(name);
}
var message = greet("SRK");
console.log(message);
var car = "Maruti";
var model = 2017;
var rectangle = {
    width: 20,
    height: 100
};
console.log(rectangle);
function sum(a, b) {
    return a + b;
}
var total = sum(5, 6);
console.log(total);
function product(a, b) {
    if (b === void 0) { b = 4; }
    return a * b;
}
console.log("Product", product(7));
var x = { a: 10, b: 5 };
function divide(_a) {
    var a = _a.a, b = _a.b;
    return a / b;
}
console.log(divide(x));
function equation(_a) {
    var a = _a.a, b = _a.b, _b = _a.c, c = _b === void 0 ? 6 : _b;
    return a + b - c;
}
console.log(equation({ a: 11, b: 17 }));
function addition(a) {
    var rest = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        rest[_i - 1] = arguments[_i];
    }
    return a + rest.reduce(function (c, b) { return c + b; }, 0);
}
console.log(addition(6, 7, 8, 8, 9, 4, 2));
var addition1 = function (a, b) { return a + b; };
console.log(addition1(7, 9));
var z = "happy";
console.log(z.length);
console.log(z.length);
var ab = "yueltewtwtwl";
console.log(ab.length);
var Animal = /** @class */ (function () {
    function Animal() {
    }
    Animal.prototype.getSound = function () {
        console.log("Woof Woof");
    };
    return Animal;
}());
var sound = new Animal();
sound.getSound();
var Student = /** @class */ (function () {
    function Student(name, age) {
        this.name = name;
        this.age = age;
    }
    Student.prototype.greet = function () {
        console.log("My name is ".concat(this.name, " and my age is ").concat(this.age));
    };
    return Student;
}());
var child = new Student("Reema", 23);
child.greet();
var Person = /** @class */ (function () {
    function Person(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    Person.prototype.fullName = function () {
        console.log(this.firstName + " " + this.lastName);
        return "".concat(this.firstName, " ").concat(this.lastName);
    };
    return Person;
}());
var Employee = /** @class */ (function (_super) {
    __extends(Employee, _super);
    function Employee(firstName, lastName, department) {
        var _this = _super.call(this, firstName, lastName) || this;
        _this.department = department;
        return _this;
    }
    Employee.prototype.getDetails = function () {
        console.log("My name is ".concat(this.fullName(), " and i work in ").concat(this.department, " department"));
    };
    return Employee;
}(Person));
var user = new Employee("Rajesh", "Shah", "HR");
user.getDetails();
var user1 = new Person("Rajesh", "Nigam");
user1.fullName();
var Famous = /** @class */ (function () {
    function Famous(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    ;
    Famous.prototype.getFullname = function () {
        return "".concat(this.firstName, " ").concat(this.lastName);
    };
    Famous.prototype.getCompensation = function () {
        return "".concat(this.getFullname(), " has monthly salary: ").concat(this.getSalary());
    };
    return Famous;
}());
var Star = /** @class */ (function (_super) {
    __extends(Star, _super);
    function Star(firstName, lastName, salary) {
        var _this = _super.call(this, firstName, lastName) || this;
        _this.salary = salary;
        return _this;
    }
    Star.prototype.getSalary = function () {
        return this.salary;
    };
    return Star;
}(Famous));
var Contractor = /** @class */ (function (_super) {
    __extends(Contractor, _super);
    function Contractor(firstName, lastName, rate, hours) {
        var _this = _super.call(this, firstName, lastName) || this;
        _this.rate = rate;
        _this.hours = hours;
        return _this;
    }
    Contractor.prototype.getSalary = function () {
        return this.rate * this.hours;
    };
    return Contractor;
}(Famous));
var name1 = new Star("Ram", "Nandgopal", 18000);
console.log(name1.getCompensation());
var name2 = new Contractor("Shyam", "Verma", 1200, 12);
console.log(name2.getCompensation());
var Generics = /** @class */ (function () {
    function Generics(content) {
        this.content = content;
    }
    Generics.prototype.getContent = function () {
        return this.content;
    };
    return Generics;
}());
var aba = new Generics("Hey you there man");
console.log(aba.getContent());
var aba2 = new Generics(321);
console.log(aba2.getContent());
function hereWithYou(a) {
    return a;
}
console.log(hereWithYou("You there"));
function printArray(arr) {
    arr.forEach(function (x) { return console.log(x); });
}
printArray([4, 5, 7, 8, 4, 2]);
printArray(["Take", "me", "home"]);
function merge(a, b) {
    return __assign(__assign({}, a), b);
}
console.log(merge({ name: "Nick" }, { age: 31 }));
