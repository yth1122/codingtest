const fs = require('fs');
let input = fs.readFileSync("/dev/stdin").toString().trim().split('\n').map(Number);
let length = input.shift();
let dp = Array.from({length:length+1}).fill(0);
dp[1] = input[0];
// 0->2 < 1->2
dp[2] = input[0]+input[1];
// 0->2->3 ,  1->3
dp[3] = Math.max(input[0],input[1]) + input[2];

for(let i=4; i<= length; i++){
	dp[i] = Math.max(dp[i-3]+input[i-2]+input[i-1] , dp[i-2]+input[i-1]);
}
	console.log(dp[length]);
