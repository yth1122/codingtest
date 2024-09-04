const fs = require('fs');
let input = fs.readFileSync("/dev/stdin").toString().trim().split('\n');
input = input.map(t=>t.split(' ').map(Number));
let [count, goal] = input[0];
let dp = Array.from({length:count+1},()=>Array(goal+1).fill(0))
for(let i=1; i<count+1; i++){
	let [weight,value] = input[i];
	for(let j=1; j<goal+1; j++){
		if(j>=weight){
			dp[i][j] = Math.max(dp[i - 1][j - weight] + value, dp[i - 1][j]);
		}else{
			dp[i][j] = dp[i - 1][j]
		}
	}
}

console.log(dp[count][goal]);
