const fs = require('fs');
let input = fs.readFileSync("/dev/stdin").toString().trim().split('\n');
input.shift();
for(let key of input){
	let stack = [];
	for(let i=0; i< key.length; i++){
		if(key[i] === ')'){
			if(stack[stack.length-1] == '('){
				stack.pop();
			}else{
				stack.push(key[i]);
			}
		}else{
			stack.push(key[i]);
		}
		if(i == key.length -1) console.log(`${stack.length ? 'NO' : 'YES'}`) 
	}
}