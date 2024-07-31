const fs = require("fs");
let input= require("fs")
  .readFileSync('/dev/stdin')
  .toString()
  .trim();

let stack = [];
for(let i=0; i < input.length; i++){
	stack.push(input[i]);
	if(stack.length>=4 && stack[stack.length-1] == 'P'){
		if(stack.slice(-4).join('')=='PPAP'){ stack.splice(-4), stack.push('P') }
	}	
}
console.log(`${stack.join('') == 'P' ? 'PPAP' : 'NP'}`);