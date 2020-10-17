/*
console.log('Hello World');
console.error('This is an error.');
console.warn('This is a warning.');
*/

/* let, const
let age = 40;

console.log(age);
*/



// String, Number, Boolean, null, undefined
/*
const name = 'Anthony';
const age = 42;

const isAwesome = true;
const x = null;
const y = undefined;
let z;

console.log(typeof name);
console.log(typeof age);
console.log(typeof isAwesome);
console.log(typeof x);
console.log(typeof y);
console.log(typeof z);
*/




// Concatenation
/*
console.log('My name is ' + name + ', and I am ' + age + '.');
console.log(`My name is ${name}, and I am ${age}.`)
*/




//Strings
/*
const s = 'Hello World!';
console.log(s.length);
console.log(s.toUpperCase());
console.log(s.toLowerCase());
console.log(s.substring(0, 5));
console.log(s.substring(0, 5).toUpperCase());
console.log(s.split(''));
console.log(s.split(' '));
*/




// Arrays
/*
const numbers = new Array(1, 2, 3, 4, 5)
console.log(numbers);

const fruits = ['apples', 'oranges', 'pears'];
console.log(fruits[1]);
fruits[3] = 'grapes';
console.log(fruits);
fruits.push('pineapples');
console.log(fruits);
fruits.unshift('strawberries');
console.log(fruits);
fruits.pop();
console.log(fruits);
console.log(Array.isArray(fruits));
console.log(fruits.indexOf('pears'));
*/




// Object literals
/*
const person = {
    firstName: 'John',
    lastName: 'Doe',
    age: 30,
    hobbies: ['music', 'movies', 'sports'],
    address: {
        street: '100 Main St',
        city: 'Anytown',
        state: 'CA'
    }
}
console.log(person);
console.log(person.firstName);
console.log(person.firstName, person.lastName);
console.log(person.hobbies[1]);
console.log(person.address.city);

const {firstName, lastName, address: {city}} = person;
console.log(firstName);
console.log(city);

person.email = 'john@zmail.com';
console.log(person);

const todos = [
    {
        id: 1,
        text: 'Take out trash',
        isCompleted: true
    },
    {
        id: 2,
        text: 'Meeting',
        isCompleted: true
    },
    {
        id: 3,
        text: 'Doctor appointment',
        isCompleted: false
    }
];

console.log(todos[1].text, todos[1].isCompleted);

// JSON
const todoJSON = JSON.stringify(todos);
console.log(todoJSON);
*/

// Loops
// For loops
/*
for(let i = 0; i < 10; i++) {
     console.log('For Loop iteration: ' + i);
 }

// While loops
let i = 0;
while(i < 10) {
    console.log(`While Loop iteration: ${i}`);
    i++;
}
*/

// Loop through array
/*
for(let i = 0; i < todos.length; i++) {
    console.log(todos[i]);
}
for(let i = 0; i < todos.length; i++) {
    console.log(todos[i].text);
}

for (let todo of todos) {
    //console.log(todo);
    //console.log(todo.text);
    console.log(todo.id);
}
*/




// forEach
/*
todos.forEach(function(todo) {
    console.log(todo.text);
});

// map
const todoText = todos.map(function(todo) {
    return todo.text;
});
console.log(todoText);

// filter
const todoCompleted = todos.filter(function(todo) {
    return todo.isCompleted === true;
});
console.log(todoCompleted);

// filter with map
const todoCompleted = todos.filter(function(todo) {
    return todo.isCompleted === true;
}).map(function(todo) {
    return todo.text;
})
console.log(todoCompleted);
*/




//Conditionals
/*
const x = 10;
const y = 10;

if (x === 10) {
    console.log('x is 10');
} else if(x > 10) {
    console.log('x is greater than 10');
} else {
    console.log('x is less than 10');
}

if(x > 5 || y > 10) {
    console.log('x is more than 5 or y is more than 10');
}

if(x > 5 && y > 10) {
    console.log('x is more than 5 or y is more than 10'); //No output
}

//const color = x > 10 ? 'red' : 'blue';
//console.log(color);

const color = 'green';
switch(color) {
    case 'red':
        console.log('color is red');
        break;
    case 'blue':
        console.log('color is blue');
        break;
    default:
        console.log('color is NOT red or blue');
        break;
}
*/

// Functions

/*function addNums(num1, num2) {
    return num1 + num2;
}
console.log(addNums(3, 4));


const addNums = (num1, num2) => {
    return num1 + num2;
}
console.log(addNums(4, 5));


const addNums = (num1, num2) => console.log(num1 + num2);
addNums(5, 6);

const addNums = (num1, num2) => num1 + num2; // RETURN not needed
console.log(addNums(6, 7));


const addNums = num1 => num1 + 7;
console.log(addNums(7));
*/




// Object Oriented
    // Constructor function
    /*
    function Person(firstName, lastName, dob) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.dob = new Date(dob);
        this.getBirthYear = function() {
            return this.dob.getFullYear();
        }
        this.getFullName = function() {
            return `${this.firstName} ${this.lastName}`;
        }
    }

    const person1 = new Person('John', 'Doe', '01-01-1901');
    const person2 = new Person('Mary', 'Jones', '02-02-1902');
    console.log(person1);
    console.log(person2.firstName);
    console.log(person2.dob);
    console.log(person1.getBirthYear());
    console.log(person2.getFullName());
    */

    // Prototypes
    /*
    function Person(firstName, lastName, dob) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.dob = new Date(dob);
        this.getBirthYear = function() {
            return this.dob.getFullYear();
        }
        this.getFullName = function() {
            return `${this.firstName} ${this.lastName}`;
        }
    }

    Person.prototype.getBirthYear = function() {
        return this.dob.getFullYear();
    }
    Person.prototype.getFullName = function() {
        return `${this.firstName} ${this.lastName}`;
    }

    const person1 = new Person('John', 'Doe', '01-01-1901');
    const person2 = new Person('Mary', 'Jones', '02-02-1902');

    console.log(person2.getFullName());
    console.log(person1);
    */

    // Classes
    /*
    class Person {
        constructor(firstName, lastName, dob) {
            this.firstName = firstName;
            this.lastName = lastName;
            this.dob = new Date(dob);
        }

        getBirthYear() {
            return this.dob.getFullYear();
        }

        getFullName() {
            return `${this.firstName} ${this.lastName}`;
        }
    }

    const person1 = new Person('John', 'Doe', '01-01-1901');
    const person2 = new Person('Mary', 'Jones', '02-02-1902');

    console.log(person2.getFullName());
    console.log(person1);
    */


// Selectors
    // Single Element
        //document.getElementById('my-form');
        //const form = document.getElementById('my-form');
        //console.log(form);
        //console.log(document.getElementById('my-form'));
        //console.log(document.querySelector('.container'));
        //console.log(document.querySelector('h1'));


    // Multiple Element
        //console.log(document.querySelectorAll('.item'));
        //console.log(document.getElementsByClassName('item'));
        //console.log(document.getElementsByTagName('li'));

//const items = document.querySelectorAll('.item');
//items.forEach((item) => console.log(item));
/*
const ul = document.querySelector('.items');
ul.remove();
ul.lastElementChild.remove();
ul.firstElementChild.textContent = 'Hello';
ul.children[1].innerText = 'Anthony';
ul.lastElementChild.innerHTML = '<h1>Hello</h1>';

const btn = document.querySelector('.btn');
btn.style.background = 'red';
*/
/*
const btn = document.querySelector('.btn');
btn.addEventListener('click', (e) => {
    e.preventDefault();
    console.log('click');
    console.log(e.target.className);
    //document.querySelector('#my-form').style.background = '#ccc';
    //document.querySelector('body').classList.add('bg-dark');
    document.querySelector('.items').lastElementChild.innerHTML = '<h1>Hello</h1>';
});
*/

const myForm = document.querySelector('#my-form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const msg = document.querySelector('.msg');
const userList = document.querySelector('#users');

myForm.addEventListener('submit', onSubmit);

function onSubmit(e) {
    e.preventDefault();

    if(nameInput.value === '' || emailInput.value === '') {
        msg.classList.add('error');
        msg.innerHTML = 'Please enter all fields.';

        setTimeout(() => msg.remove(), 3500);
    } else {
        const li = document.createElement('li');
        li.appendChild(document.createTextNode(`${nameInput.value} : ${emailInput.value}`));

        userList.appendChild(li);

        // Clear fields
        nameInput.value = '';
        emailInput.value = '';
    }
}