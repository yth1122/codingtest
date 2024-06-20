const fs = require('fs');
let input = fs.readFileSync("/dev/stdin").toString().trim();
let dp = Array.from({length:+input+1}).map((t,i)=>i);
for(let i=1; i<= +input; i++){
	for(let j=1; j**2<=i; j++){
		dp[i]=Math.min(dp[i],dp[i-j**2]+1);
	}
}
console.log(dp[dp.length-1]);