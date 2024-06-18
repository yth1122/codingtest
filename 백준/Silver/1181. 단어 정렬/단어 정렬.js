const fs = require('fs');
let input = fs.readFileSync("/dev/stdin").toString().trim().split('\n');
let size = input.shift();
input = [...new Set(input)];
		
input.sort((a,b)=> {
	if(a.length!=b.length){
		return a.length - b.length
	}else{
		return a.localeCompare(b)
	}
} )
console.log(input.join('\n'));