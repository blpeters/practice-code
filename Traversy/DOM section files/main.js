

//console.log(window); //window object is the parent object of the browser. the top level.
//has many properties - fetch API, local storage to store stuff in the browser. document, etc.


//Single element selectors
console.log(document.getElementById('my-form'));
console.log(document.querySelector('.container'));  //This is much newer than get element by id, because you can select more than just the id.

//multiple element selectors
console.log(document.querySelectorAll('.item')); //provides a node list which is very similar to an array.

const items = document.querySelectorAll('.item');
//items.forEach((item) => console.log(item));

const ul = document.querySelector('.items');
//ul.lastElementChild.remove();
ul.firstElementChild.textContent = 'Hello';
ul.children[1].innerText = 'Brad';
ul.lastElementChild.innerHTML = '<h1>Hello</h>';

const btn = document.querySelector('.btn');
btn.style.background = 'red'; //you could do this in css, but with events and functions combined in JS, you can update things in real time


//EVENTS
/* btn.addEventListener('mouseout', (e) => {    ///look up all the different input and output events in the MDN documentation.
    e.preventDefault();
    console.log(e.target.className);  //every time you click on the submit button it will return valuable information to you.
    document.querySelector('#my-form').style.background = '#ccc';
    document.querySelector('body').classList.add('bg-dark');  //changes the entire body backgroung to a style defined in the CSS file.
    document.querySelector('.items').lastElementChild.innerHTML = '<h1>YO</h1>';
});
 */

//Create a form script to add a user.

//grab a bunch of stuff from the DOM as variables:
const myForm = document.querySelector('#my-form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const msg = document.querySelector('.msg');
const userList = document.querySelector('#users');

myForm.addEventListener('submit', onSubmit);

function onSubmit(e) {
    e.preventDefault();   //look up docs on this.
    console.log(nameInput.value);
    if (nameInput.value === '' || emailInput.value === '') {
        //alert('Please enter all fields'); ALERTS SUCK. USE THE MSG DIV
        msg.classList.add('error'); //adding the error class from CSS
        msg.innerHTML = 'Please Enter all fields';

        setTimeout( () => msg.remove(), 3000);  //removes the error message after 3 seconds.
    } else {
        console.log('success');
        const li = document.createElement('li');
        li.appendChild(document.createTextNode(`${nameInput.value} : ${emailInput.value} `));

        userList.appendChild(li);  
        
        //Clear Fields after submit
        nameInput.value = '';
        emailInput.value = '';
    }
}

//IF YOU WANT TO SAVE ANY OF THE ABOVE FORM DATA, YOU WOULD NEED SOME FORM OF BACKEND ATTACHED TO THIS THROUGH NODE.JS OR PHP, PYTHON ETC.
//THEN YOU WOULD SEND REQUESTS FROM THE FRONT END USING SOMETHING LIKE THE FETCH API OR AJAX.


//BRAD'S VERSION OF NOTES BELOW:
/* 
// ELEMENT SELECTORS

// Single Element Selectors
console.log(document.getElementById('my-form'));
console.log(document.querySelector('.container'));
// Multiple Element Selectors
console.log(document.querySelectorAll('.item'));
console.log(document.getElementsByTagName('li'));
console.log(document.getElementsByClassName('item'));

const items = document.querySelectorAll('.item');
items.forEach((item) => console.log(item));


// MANIPULATING THE DOM
const ul = document.querySelector('.items');
// ul.remove();
// ul.lastElementChild.remove();
ul.firstElementChild.textContent = 'Hello';
ul.children[1].innerText = 'Brad';
ul.lastElementChild.innerHTML = '<h1>Hello</h1>';

const btn = document.querySelector('.btn');
// btn.style.background = 'red';


// EVENTS

// Mouse Event
btn.addEventListener('click', e => {
  e.preventDefault();
  console.log(e.target.className);
  document.getElementById('my-form').style.background = '#ccc';
  document.querySelector('body').classList.add('bg-dark');
  ul.lastElementChild.innerHTML = '<h1>Changed</h1>';
});

// Keyboard Event
const nameInput = document.querySelector('#name');
nameInput.addEventListener('input', e => {
  document.querySelector('.container').append(nameInput.value);
});


// USER FORM SCRIPT

// Put DOM elements into variables
const myForm = document.querySelector('#my-form');
const emailInput = document.querySelector('#email');
const msg = document.querySelector('.msg');
const userList = document.querySelector('#users');

// Listen for form submit
myForm.addEventListener('submit', onSubmit);

function onSubmit(e) {
  e.preventDefault();
  
  if(nameInput.value === '' || emailInput.value === '') {
    // alert('Please enter all fields');
    msg.classList.add('error');
    msg.innerHTML = 'Please enter all fields';

    // Remove error after 3 seconds
    setTimeout(() => msg.remove(), 3000);
  } else {
    // Create new list item with user
    const li = document.createElement('li');

    // Add text node with input values
    li.appendChild(document.createTextNode(`${nameInput.value}: ${emailInput.value}`));

    // Add HTML
    // li.innerHTML = `<strong>${nameInput.value}</strong>e: ${emailInput.value}`;

    // Append to ul
    userList.appendChild(li);

    // Clear fields
    nameInput.value = '';
    emailInput.value = '';
  }
} */