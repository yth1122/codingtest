const fs = require('fs');
let input = fs.readFileSync("/dev/stdin").toString().trim();
let answer= [];
let count = 0;
function Hanoi(num, from, other, to){
	if(num === 0) {
			return;
	}else{
			Hanoi(num - 1 , from, to, other);
			answer.push(`${from} ${to}`);
			count++;
			Hanoi(num - 1, other, from, to);
	}
}
Hanoi(input, '1','2','3');
console.log(count);
console.log(answer.join('\n'));