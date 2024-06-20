	// //https://school.programmers.co.kr/learn/courses/30/lessons/148652 시간초과 66.7점
	function test() {
		console.log(solution(3,4,17));
	}

// https://www.acmicpc.net/problem/2178
	function solution(n,l,r) {
		let input = '7';
		let dp = Array.from({length:+input+1}).map((t,i)=>i);
		console.log(dp);
		for(let i=1; i<= +input; i++){
			for(let j=1; j**2<=i; j++){
				console.log(i,j,i-j**2,dp[i],dp[i-j**2]+1);
				dp[i]=Math.min(dp[i],dp[i-j**2]+1);
			}
		}
	}

module.exports = test;