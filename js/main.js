"use strict";

const box = document.getElementById('box');

console.log(box);

const buttons = document.getElementsByTagName('button');

console.log(buttons);

const circles = document.getElementsByClassName('circle');

console.log(circles);

const hearts = document.querySelectorAll('.heart');

hearts.forEach(item => {
	console.log(item);
});

const oneHeart = document.querySelector('.heart');
console.log(oneHeart);

const wrapper = document.querySelector('.wrapper');

buttons[1].style.borderRadius = '100%';
circles[0].style.backgroundColor = 'red';

box.style.cssText = 'background-color: blue; width: 500px';

//for(let i = 0; i < hearts.length; i++){
//	hearts[i].style.backgroundColor = 'crimson';
//}

hearts.forEach(item => {
	item.style.backgroundColor = 'rgb(231, 250, 65)';
});

const div = document.createElement('div');
//const text = document.createText('There was me'); - old version

div.classList.add('black');

//document.body.append(div);

wrapper.append(div);
//wrapper.appendChild(div);

//wrapper.insertBefore(div, hearts[0]);

//wrapper.prepend(div);

//hearts[0].before(div);

//hearts[0].after(div);

//circles[0].remove();
//wrapper.removeChild(hearts[1]);

//hearts[0].replaceWith(circles[0]);

//wrapper.replaceChild(circles[0], hearts[0]);	

div.innerHTML = '<h1>Hello, World</h1>';

//div.textContent = 'Hello';

div.insertAdjacentHTML('beforebegin', '<h2>Hello</h2>');