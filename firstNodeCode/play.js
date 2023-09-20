const { Console } = require("console");

var namel = 'Chi';
var agel = 16;
var hasHobbies = true;

const User = (userName, userAge, userHobby)=> {
    return ('Name is ' + userName +', age is ' + userAge +' and the user has hobbies: ' + userHobby);
}

const add = (a,b) => a+b;

//console.log(add(1,2));
//console.log(User(namel, age, hasHobbies));

// EXPLORING OBJECT
const person = {
    name: 'Gab',
    age: 14,
    greet(){
        console.log('Hi, I am ' + this.name);
    }
};

//OBJECT DESTRUCTURING
const printName = ({ name }) => {
    console.log(name);
}
printName(person);

const { name, age } = person;
console.log( name, age);

//person.greet();

// EXPLORING ARRAYS
const hobbies = ['Sports', 'Cooking'];

//console.log(hobbies.map(hobby => 'Hobby: ' + hobby));

//hobbies.push('programming');
//console.log(hobbies);


// SPREAD, REST OPERATOR
//Spread...
const coppiedArray = [...hobbies];
console.log(coppiedArray);

//Rest... -> the 'rest' operator puts the result of the code in an array '[]'
const toArray = (...args) => {
    return args
}
console.log(toArray(1,2,3,4));