"use strict";

const array = [1, 2, 3, 4, 5, 6];

array.pop();
array.push(10);

for(let i = 0; i < array.length; i++){
	console.log(array[i]);
}

for(let element of array){
	console.log(element);
}

array.forEach(function(item, i, array){
	console.log(`${i}: ${item} is inside of array ${array}.`);
});

const str = prompt("", "");
const products = str.split(", ");
console.log(products.join('; '));