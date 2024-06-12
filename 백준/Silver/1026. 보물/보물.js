const fs = require('fs');
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
let leng = input[0];
let x = input[1];
let y = input[2];
let result = 0;

x = x.split(' ').sort((a,b)=>+a - +b);
y = y.split(' ').sort((a,b)=>+b - +a);
for(let i=0; i < leng; i++){
	result += (+x[i] * +y[i]);
} 
console.log(result);