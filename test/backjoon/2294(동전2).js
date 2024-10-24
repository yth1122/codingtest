const fs = require('fs');
let input = fs.readFileSync("/dev/stdin").toString().trim().split('\n');
let [count, sum] = input.shift().split(' ').map(Number);
let dp = Array.from({length:sum+1}).fill(Infinity);
dp[0] = 0;
input = input.map(Number);
for(let i=0; i<input.length; i++){
	for(let j=input[i]; j<dp.length; j++){
		dp[j] = Math.min(dp[j - input[i]] + 1, dp[j]);
	}
};
		
console.log(dp[sum] == Infinity ?  -1 : dp[sum]);