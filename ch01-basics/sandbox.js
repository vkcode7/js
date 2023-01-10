//modern javascript- from novice to ninja (Shun Pelling)

//primitive types - number, string, boolean, null, undefined, symbols
//reference types - all types of objects (object literals , arrays, functions, dates)

//primitive values are stored on stack
//refernce types are stored in heap


//declaring variables
let age = 25;
let $year=2022; //var year = 2022; var is old way of declaring

//a constant
const pi = 3.14;

let author = 'Mark David';
let title = 'How to play piano';
let likes = 10;

//simple concatenation
let result = 'The book ' + title + ' authored by ' + author + ' has ' + likes + ' likes';
console.log(result);

//template style concatenation - use back-quotes not quotes
result = `The book ${title} authored by ${author} has ${likes} likes`;
console.log(result);

let names = ['shaun', 'Li', 'Hun'];
console.log(25=='25'); //true - java does type conversion behind the scenes
console.log(25 === '25'); //false === (3 =) is used for strict comparison - value and type
console.log(25 !== '25'); //true <-- strict comparison here too

//type conversion
let score = '100';
console.log(typeof(score));

let iScore = Number(score) * 2; //converts to number
let sScore = String(iScore);
console.log(sScore, typeof sScore);

let rBoolean = Boolean('0');
console.log(rBoolean, typeof rBoolean);

let iArray = [10, 20, 25];
for(let x in iArray)
    console.log(iArray[x]);

if(iScore === 200)
    console.log("value is 200");
else
    console.log("not 200");

function greet() {
    console.log("hello");
}
//or
speak1 = function greet() {
    console.log("hello2");
}
//or
speak2 = function(fname, time = 'day') {
    console.log(`good ${time} ${fname}`);
}

greet();
speak1();
let fname='Mark';
speak2(fname);

//regular function
const area = function(r) { return 2 * 3.14 * r ** 2; }
const cir_area = area(10);
console.log(cir_area);

//arrow function - above can be written as
const area2 = (r) => { return 2 * 3.14 * r ** 2};

//or
const area3 = (r) => 2 * 3.14 * r ** 2; //notice - no need of return statement;

//callback function
function myCallBackTest(callbackFunc) {
    callbackFunc("Dennis");
}

myCallBackTest(speak2); //prints --> good day Dennis
myCallBackTest(function(name){ 
    console.log(`How are you doing ${name}?`); } //prints --> How are you doing Dennis?
    );

names.forEach(function(person){
    console.log(person); //prints name of each person in array names
});

//above can be written as
names.forEach( person => {
    console.log(person); //prints name of each person in array names
});

const logPerson = (p, i) => {
    console.log(`Hello ${i} - ${p}`);
};

//above can be written as
names.forEach(logPerson);

let user = {
    name: 'mark',
    age: 20,
    location: 'new york',
    blogs: [
                {title: 'why mac & cheese', likes: 30},
                {title: 'harry poter is good', likes: 45} 
            ],
    login: function() { console.log('the user is loggged in ' + this.location); },
    logout(status) {
        console.log('the user logged out: ' + this.name + ' status is: ' + status);
    }
};

console.log(user);
console.log(user.name); //using .
console.log(user['name']); //using []

let key = 'name';
console.log(user[key]);
user.login(); //<-- login() is a method of user object
user.logout(-1);

//builtin Math object library

console.log(Math);
console.log(Math.PI);
console.log(Math.random()); //<-- generates a random number