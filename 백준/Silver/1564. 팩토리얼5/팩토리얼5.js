const fs = require('fs');
const input = fs.readFileSync("/dev/stdin").toString().trim();
let result = '';
let fac = 1;
		
for(let i=2; i<= +input; i++){
	fac*=i;
	while(fac %10 ==0){ fac /=10};
	fac %= 1000000000000;
}
let trans = fac.toString();
console.log(trans.substring(trans.length-5,trans.length))