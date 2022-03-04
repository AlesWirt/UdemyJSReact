"use strict";

//To String

//1)
console.log(typeof(String(null)));
console.log(typeof(String(4)));

//2)
console.log(typeof(null + ''));

const num = 5;
console.log('http://vk.com/catalog/' + num);

const finSize = 26 + 'px';


//To Number

//1)
console.log(typeof(Number('4')));

//2)
console.log(typeof(+'5'));

//3)
console.log(typeof(parseInt('15px', 10)));

let answ = +prompt('Hello', '');


//To boolean

//To false - 0, '', null, undefinde, NaN

//1)
let switcher = null;

if(switcher){
	console.log('Working...');
}

switcher = 1;

if(switcher){
	console.log('Working...');
}

//2)
console.log(typeof(Boolean('4')));

//3)
console.log(typeof(!!'3'));