	// //https://school.programmers.co.kr/learn/courses/30/lessons/148652 시간초과 66.7점
	function test() {
		console.log(solution(3,4,17));
	}

// https://www.acmicpc.net/problem/2178
	function solution(n,l,r) {
		let input = [[4,7],[6,13],[4,8],[3,6],[5,12]];
		let [length,max] = input.shift();
		let dp = Array.from({legnth:length}).fill(0);
		for(let key of input){
			dp[key[0]] = key[1]; 
		}
		console.log(dp);
	}

module.exports = test;