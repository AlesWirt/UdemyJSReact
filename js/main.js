"use strict";

let a = 5,
	b = a;

const obj = {
	a: 5,
	b: 1
};



function copy(mainObj){
	let objCopy = { };
	let key;
	for(key in mainObj){
		objCopy[key] = mainObj[key];
	}

	return objCopy;
}

const numbers = {
	a: 2,
	b: 5,
	c: {
		x: 7,
		y: 8
	}
};

const newNumbers = copy(numbers);

newNumbers.a = 12;

console.log(newNumbers);
console.log(numbers);

const video = ['youtube', 'vimeo'],
	blogs = ['wordpress', 'livejournal'],
	internet = [...video, ...blogs, 'telegram', 'linkedIn'];

console.log(internet);

function log(a, b, c){
	console.log(a);
	console.log(b);
	console.log(c);
}

const num = [2, 5, 7];

log(...num);

const arr = ['a', 'b'];
const newArray = [...arr];

const q = {
	one: 1,
	two: 2
};

const newQ = {
	...q
};