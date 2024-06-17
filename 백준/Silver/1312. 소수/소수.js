const fs = require('fs');
const input = fs.readFileSync("/dev/stdin").toString().trim().split(' ').map(Number);
let [A,B,N] = input;
let result;
for(let i=0; i<N; i++){
	A = (A%B)*10;
	result = Math.floor(A/B);
}
console.log(result);