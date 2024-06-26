const fs = require('fs');
let input = fs.readFileSync("/dev/stdin").toString().trim().split('\n').map(t=>t.split(' ').map(Number));
let [length] = input.shift();
for(let i=1; i<+length; i++){
	input[i][0] += Math.min(input[i-1][1],input[i-1][2]);
	input[i][1] += Math.min(input[i-1][0],input[i-1][2]);
	input[i][2] += Math.min(input[i-1][0],input[i-1][1]);
}
console.log(input[length-1].sort((a,b)=>a-b)[0]);