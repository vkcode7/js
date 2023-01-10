//Local Storage

const log1 = (data) => console.log(data);
const log2 = (d1, d2) => console.log(d1, d2);

let ls = localStorage;
ls.setItem('name', 'mario');
ls.setItem('age', 50);

let name = ls.getItem('name');
let age = ls.getItem('age');

console.log(name, age);

ls.removeItem('name');
ls.clear(); //clears entire cache

console.log(ls.name, ls.age);

//JSON to string and vice versa

const plays = [
    {"text": "play by Luigi vol 1", "author": "luigi"},
    {"text": "play by Luigi vol 2", "author": "luigi"},
    {"text": "play by Luigi vol 3", "author": "luigi"},
    {"text": "play by Luigi vol 4", "author": "luigi"}
];

const playsData = JSON.stringify(plays);
console.log(playsData);

const jsonData = JSON.parse(playsData);
console.log(jsonData);

//Arrays
const ages = [10, 20, 30];
const ages2 = new Array(40, 50, 60);
console.log(ages, ages2);

//constructing objects
const obj1 = {};
const obj2 = new Object();
log2(obj1, obj2);

//primitives vs objects
const primname = 'mario'; //this is a primitive data type
const objname = String('luigi'); //this is object

//when we perform ops on primitive type, JS engine wraps it in a object first
//such as numbers to Number, strings to String

//Classes
class User {
    constructor(name, email) {
        this.name = name;
        this.email = email;
    }

    login() {
        log1(`user ${this.name} is logged in`);
        return this;
    }

    logout() {
        log1(`user ${this.name} is logged out`);
    }
}

const u1 = new User('mario', 'mario@gmail.com');
const u2 = new User('luigi', 'luigi@gmail.com');

log2(u1, u2);
u1.login();
u2.login();
u1.logout();
u2.logout();

u1.login().logout(); //chaining - make sure login() returns this

//Derived classes

class Admin extends User {
    constructor(name, email, title) {
        super(name, email);
        this.title = title;
    }

    reboot(servername) {
        log1(`Rebooting server ${servername}, booted by ${this.title}, name ${this.name}`);
    }
}

const admin = new Admin('Dimpy', 'dimpy@gmail.com', 'sa');
admin.reboot('anymachine');

//class declaration using old style
function Employee(name, email) {
    this.name = name;
    this.email = email;
    this.login = function () {
        log1(`${this.name} is logged in`);
    };
}

Employee.prototype.logout = function() {
    log1(`${this.user} is logged out`);
}

const emp = new Employee('Jack', 'jack@yahoo.com');
emp.login();
emp.logout();

//prototype inheritance
function Manager(name, email, title) {
    Employee.call(this, name, email);
    this.title = title;
}

Manager.prototype = Object.create(Employee.prototype);
Manager.prototype.removeEmployee = function() {
    log1(`Remove am employee`);
};

const manager = new Manager('gracie', 'gracie@yahoo.com', 'Engineer');
manager.removeEmployee();
log1(manager);