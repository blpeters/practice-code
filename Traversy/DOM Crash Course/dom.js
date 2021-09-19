// //console.dir(document);  //shows us a directory of the document object. helps navigate to what you need
// console.log(document.domain);
// console.log(document.URL);

// document.title = '123';
// console.log(document.title);
// console.log(document.doctype);
// console.log(document.head);
// //console.log(document.all); //gives us an array (actually an HTML collection) of everything in the DOM by tags.
// //console.log(document.all[10]);
// console.log(document.forms);
// console.log(document.links);
console.log(document.images);

//SELECTORS

console.log(document.getElementById('header-title'));
const headerTitle = document.getElementById('header-title');
console.log(headerTitle);
headerTitle.textContent = 'hello';
headerTitle.textContent = 'Goodbye';

//innerText vs. textContent: textContent any span or style components. innerText keeps the styling! innerText is probably good for now

headerTitle.innerHTML = '<h3>Hello</h3>'; //put an h3 tag inside of the headerTitle tag.

//change style:
document.getElementById('main-header').style.borderBottom = 'solid 3px #000';

// GETELEMENTSBYCLASSNAME

let items = document.getElementsByClassName('list-group-item');
console.log(items);
items[1].textContent = 'Hello B';
items[1].style.fontWeight = 'bold';
items[1].style.backgroundColor = 'yellow';
//items.style.backgroundColor = 'blue'; //This will not work because you would have to loop through each element in the collection.

for(let i = 0; i < items.length; i ++) {
    items[i].style.backgroundColor = 'grey';
}

//GETELEMENTSBYTAGNAME
let li = document.getElementsByTagName('li');

//QUERYSELECTOR!!!!!!
//WORKS VERY SIMILARLY TO JQUERY

let header = document.querySelector('#main-header');
header.style.borderBottom = 'solid 10px gray';

var input = document.querySelector('input');
input.value = 'Brettyy';


var lastItem = document.querySelector('.list-group-item:last-child');
lastItem.style.color = 'blue';

var secondItem = document.querySelector('.list-group-item:nth-child(2)');  //Using CSS psuedoselectors
secondItem.style.color = 'coral';


//QUERYSELECTORALL

var titles = document.querySelectorAll('.title');
console.log(titles);  //gives a node list - can run array functions on these!
titles[0].textContent = 'Submit summin';





//BRAD'S NOTES ARE BELOW:

// EXAMINE THE DOCUMENT OBJECT //

// console.dir(document);
// console.log(document.domain);
// console.log(document.URL);
// console.log(document.title);
// //document.title =  123;
// console.log(document.doctype);
// console.log(document.head);
// console.log(document.body);
// console.log(document.all);
// console.log(document.all[10]);
// // document.all[10].textContent = 'Hello';
// console.log(document.forms[0]);
// console.log(document.links);
// console.log(document.images);

// GETELEMENTBYID //
// console.log(document.getElementById('header-title'));
// var headerTitle = document.getElementById('header-title');
// var header = document.getElementById('main-header');
// console.log(headerTitle);
// headerTitle.textContent = 'Hello';
// headerTitle.innerText = 'Goodbye';
// console.log(headerTitle.innerText);
// headerTitle.innerHTML = '<h3>Hello</h3>';
// header.style.borderBottom = 'solid 3px #000';

// GETELEMENTSBYCLASSNAME //
// var items = document.getElementsByClassName('list-group-item');
// console.log(items);
// console.log(items[1]);
// items[1].textContent = 'Hello 2';
// items[1].style.fontWeight = 'bold';
// items[1].style.backgroundColor = 'yellow';

// // Gives error
// //items.style.backgroundColor = '#f4f4f4';

// for(var i = 0; i < items.length; i++){
//   items[i].style.backgroundColor = '#f4f4f4';
// }

// GETELEMENTSBYTAGNAME //
// var li = document.getElementsByTagName('li');
// console.log(li);
// console.log(li[1]);
// li[1].textContent = 'Hello 2';
// li[1].style.fontWeight = 'bold';
// li[1].style.backgroundColor = 'yellow';

// // Gives error
// //items.style.backgroundColor = '#f4f4f4';

// for(var i = 0; i < li.length; i++){
//   li[i].style.backgroundColor = '#f4f4f4';
// }

// QUERYSELECTOR //
// var header = document.querySelector('#main-header');
// header.style.borderBottom = 'solid 4px #ccc';

// var input = document.querySelector('input');
// input.value = 'Hello World'

// var submit = document.querySelector('input[type="submit"]');
// submit.value="SEND"

// var item = document.querySelector('.list-group-item');
// item.style.color = 'red';

// var lastItem = document.querySelector('.list-group-item:last-child');
// lastItem.style.color = 'blue';

// var secondItem = document.querySelector('.list-group-item:nth-child(2)');
// secondItem.style.color = 'coral';

// QUERYSELECTORALL //
// var titles = document.querySelectorAll('.title');

// console.log(titles);
// titles[0].textContent = 'Hello';

// var odd = document.querySelectorAll('li:nth-child(odd)');
// var even= document.querySelectorAll('li:nth-child(even)');

// for(var i = 0; i < odd.length; i++){
//   odd[i].style.backgroundColor = '#f4f4f4';
//   even[i].style.backgroundColor = '#ccc';
// }



// TRAVERSING THE DOM //
//var itemList = document.querySelector('#items');
// parentNode
// console.log(itemList.parentNode);
// itemList.parentNode.style.backgroundColor = '#f4f4f4';
// console.log(itemList.parentNode.parentNode.parentNode);

// parentElement
// console.log(itemList.parentElement);
// itemList.parentElement.style.backgroundColor = '#f4f4f4';
// console.log(itemList.parentElement.parentElement.parentElement);

// childNodes
// console.log(itemList.childNodes);

// console.log(itemList.children);
// console.log(itemList.children[1]);
// itemList.children[1].style.backgroundColor = 'yellow';

// // FirstChild
// console.log(itemList.firstChild);
// // firstElementChild
// console.log(itemList.firstElementChild);
// itemList.firstElementChild.textContent = 'Hello 1';


// lastChild
// console.log(itemList.lastChild);
// lastElementChild
// console.log(itemList.lastElementChild);
// itemList.lastElementChild.textContent = 'Hello 4';

// nextSibling
// console.log(itemList.nextSibling);
// // nextElementSibling
// console.log(itemList.nextElementSibling);

// previousSibling
// console.log(itemList.previousSibling);
// previousElementSibling
// console.log(itemList.previousElementSibling);itemList.previousElementSibling.style.color = 'green';

// createElement

// //