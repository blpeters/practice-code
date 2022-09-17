const container = document.querySelector('#container');

const content = document.createElement('div');
content.classList.add('content');
content.textContent = 'This is the glorious text-content!';
container.appendChild(content);

const red = document.createElement('p');
red.textContent = "Hey I'm red!";
red.style.color = "red";
container.appendChild(red);

const blueHeader = document.createElement("h3");
blueHeader.textContent = "I'm a blue h3!";
blueHeader.style.color = "blue";
container.appendChild(blueHeader);

const details = document.createElement('div');
details.style.border = "1px solid black";
details.style.backgroundColor = "pink";

const detailHeader = document.createElement('h1');
detailHeader.textContent = "I'm in a div";

const detailPara = document.createElement('p');
detailPara.textContent = "ME TOO!";

details.appendChild(detailHeader);
details.appendChild(detailPara);

container.appendChild(details);