	// //https://school.programmers.co.kr/learn/courses/30/lessons/148652 시간초과 66.7점
	function test() {
		console.log(solution(3,4,17));
	}

// https://www.acmicpc.net/problem/2178
	function solution(n,l,r) {
		// 오르막수 11057

		// 0,1,2,3,4,5,6,7,8,9 = 10 , 1 9 ,2 8, 3 7, 4 6  5 5
		// 10 , 55  10*11 / 2 ,  자리수 마다 늘어남  
		let input =3 ;
		let dp = Array.from({length:1000}).fill(0);
		dp[1] = 10;
		// 


	}

module.exports = test;