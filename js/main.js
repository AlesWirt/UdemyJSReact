"use strict";

const options = {
	name: 'test',
	width: 1024,
	height: 1024,
	colors: {
		border: 'black',
		bg: 'red'
	},
	makeTest: function(){
		console.log('Test');
	}
};

options.makeTest();

const {border, bg} = options.colors;
console.log(border);

let counter = 0;
for(let key in options){
	if(typeof(options[key]) === 'object'){
		for(let i in options[key]){
			console.log(`Property ${i} is: ${options[key][i]}`);		
		}
	}
	else{
		console.log(`Property ${key} is: ${options[key]}`);
	}
}

console.log(Object.keys(options).length);