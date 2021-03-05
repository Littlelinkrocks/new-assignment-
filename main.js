const main = document.querySelector('main'); 


const joke1 = `What do you call a crying sister? A crisis`;

const joke2 = `Why are frogs always so happy? They eat what ever bugs them`;

const joke3 = `What do we call a bee born in United States? A USB`;


const template = `<h3>My Jokes</h3>

<ul>

<li>${joke1}</li>

<li>${joke2}</li>

<li>${joke3}</li>

</ul>`;


main.innerHTML = template;

const para = document.createElement('p');

const text = document.createTextNode("That's all folks!");

para.appendChild(text);

document.body.appendChild(para);

 
