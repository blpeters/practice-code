//SEPTEMBER 17, 2021 - Video: Brad Traversy JavaScript Crash Course for Beginners
//use liveserver extension to instantly see updates in the browser.

console.log("hello, world"); //Don't use an alert function for debugging because it blocks other things from running.
//console is a great debugging tool - look up MDN documentation for additional console commands.
//for example - use console.error to traace errors.

//VARIABLES
//var, let and const.
//var is always globally scoped, so we don't like to use it anymore (pre ES6 in 2015)
//use const as much as possible!

//DATA TYPES
// String, Number, Boolean, null, undefined, Symbol (ES6)
//These are the primitive data types. arrays, objects are more advanced.
const name = 'John';
const age = 30;
const rating = 4.5;  //This is just a number in javascript (same as integer)
const isCool = true;
const x = null;
const y = undefined;
let z; //This is also undefined.

console.log(typeof age);  //This will tell you this is a string.

//CONCATENATION
//template literals in ES6:
console.log(`my name is ${name} and I am ${age}`);

//STRING METHODS
const s = 'Hello World';
console.log(s.length); //notice no parentheses (length() would be a method.)
console.log(s.toUpperCase(s));
console.log(s.substring(0, 5).toUpperCase());
console.log(s.split('')); // you could use comma-separated values, and insert a comma instead and create an array out of those values.

//ARRAYS
//less common way - array constructor:
//const numbers = new Array(1,2,3,4,5);
//console.log(numbers);

//more common is bracket notation:
const fruits = ['apples', 'oranges', 'pears'];

//OBJECT LITERALS - basically just key: value pairs
const person = {
    firstName: 'John',
    lastName: 'Doe',
    age: 30,
    hobbies: ['music', 'movies', 'sports']
};
console.log(person.hobbies[1]);

//destructuring
//create variables from the object:
const { firstName, lastName } = person; //takes thes out of person object and turns them into their own const.

//add properties:
person.email = 'john@gmail.com'; //adds email to person object.

//JSON - a Data format used in full stack development. used when sending data to a server/using APIs, etc
//send/receive in "JSON" format. very similar to object literals.
//look up json formatter on google. paste in an array of objects and convert.
//method called JSON.stringify(object array); 

const todos = [
    {
        id: 1,
        text: 'Take out trash',
        isCompleted: true
    },
    {
        id: 2,
        text: 'Meeting with boss',
        isCompleted: true
    },
    {
        id: 3,
        text: 'Dentist appt',
        isCompleted: false
    },
];

//LOOPS

//For loops
for(let i = 0; i < 10; i++) {
    //console.log(i);
}

//While loops - old school

console.log['hi'];

//for of loop
for(let todo of todos)  //todo could be any name. todos is the name of the desired array.
{
    console.log(todo.text);
    console.log(todo.id);
}


//higher order array methods - forEach, map, filter

todos.forEach(function(todo) {   //loops through an array for you.
    console.log(todo.text);
});

const todoText = todos.map(function(todo) {   //map returns an array. here we are returning an array of just text values.
    return todo.text;
});

console.log(todoText);  

const todoCompleted = todos.filter(function(todo) {   //filter will return an array with the items that match the function.
    return todo.isCompleted === true;
});

console.log(todoCompleted); //Returns the entire objects of each object that has been "completed".

//CONDITIONALS
const xx = 10;

if (xx == 10) {         //a double equals just matches the values, but not the data types. so a string of "10" is still true with the number 10. 
    console.log('xx is 10');
} else {
    console.log('xx is not 10');
}

//triple equals is often used because you should expect the data types to match as default.

//ternary operator (?) - used to assign variables based on a condition.
const xxx = 10;
const color = xxx > 10 ? 'red' : 'blue';  //"if x is less than 10, set color equal to red, ELSE set color equal to blue"

//SWITCHES - another way to evaluate a condition.

switch(color) {
    case 'red':
        console.log('color is red');
        break;
    case 'blue':
        console.log('color is blue');
        break;
    default:
        console.log('color is not red or blue');
        break;
}


//FUNCTIONS

function addNums(num1 = 1, num2 = 2) {      //1 and 2 are optional default values.
    console.log(num1 + num2);
}

addNums(10,20);
addNums(); //will return NaN 'not a number' unless default values are assign as shown above.


//arrow functions from ES6:
//name function as a variable (with const) and then equals and then inputs, then arrow notation and then curly brackets with functionality
//example:

const subtractNums = (number1 = 1, number2 = 2) => {
    console.log(number1 - number2);
}

//if you have just a single line in the function, just use one line without curly braces. if it's in one line and you are 
//returning a value, you don't even need to use the "return" verbage:

const multNums = (n1 = 1, n2 = 5) => n1 * n2; //single line arrow function notation.

console.log(multNums(5,10));

//OBJECT ORIENTED PROGRAMMING

//CONSTRUCTOR FUNCTION:
 function Person(firstName, lastName, dob) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.dob = new Date(dob); //This is using a constructor within the current constructor to call for another object to be made - this time a Date object!
    this.getBirthYear = function() {        //calling methods within the object.
        return this.dob.getFullYear();
    }
    this.getFullName = function() {
        return `${this.firstName} ${this.lastName}`;
    }
}

 //Instantiate object:
const person1 = new Person('Brett', 'Peters', '1-22-1991'); //made a new person!
console.log(person1.dob.getFullYear()); //lots of different methods you can call on the built in Date object in JavaScript. These will pop up in VSCode as well.

console.log(person1.getBirthYear());
console.log(person1.getFullName()); //calling the mthod from the Person object. 

//prototypes:

//look up documentation - this is better for calling methods in the object, but not for every instance if these methods aren't needed for every person.

//CLASSES were added with ES6. This is the same as the objects, but it has syntactic sugar. Since classes are used in so many other languages.
//a method is a function inside of a class or object.
//classes eliminate the use of separate prototypes outside of the object call.

class Person2 {
    constructor(firstName, lastName, dob) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.dob = new Date(dob);
    }

    getBirthYear2() {
        return this.dob.getFullYear();
    }

    getFullName2() {
        return `${this.firstName} ${this.lastName}`;
    }
}

//DOM and DOM Manipulation - See Brad's separate files to follow along in the description of this video.



