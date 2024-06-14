const fs = require('fs');
let input = fs.readFileSync("/dev/stdin").toString().trim();
let count = 0;
	
while(input.length > 1){
	let sum=0 ;
	count+=1;
	for(let i=0; i<input.length;i++){
		sum+= +input[i];
	};
	input = sum+'';
}
console.log(`${count}`);
console.log(`${(+input%3) == 0 ? 'YES':'NO'}`);