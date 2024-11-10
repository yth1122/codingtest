	
	function test() {
		console.log(solution());
	}

	function solution() {
		let input =
`6 4`;
		console.log(input);
		let [size,count] = input.split(' ').map(Number);
		// 0 ~ size count로 묶어서 덧셈
		let dp = Array.from({length:size+1},()=> Array.from({length:count+1}).fill(0));
		
		for (let j = 1; j <= count; j++) {
			dp[0][j] = 1; 
		}
		for (let i = 1; i <= size; i++) {
			for (let j = 1; j <= count; j++) {
					dp[i][j] = (dp[i][j - 1] + dp[i - 1][j]) % 1000000000;
			}
		}
		return dp[size][count];
		
	}	


module.exports = test;

