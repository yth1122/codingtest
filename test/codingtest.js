	// //https://school.programmers.co.kr/learn/courses/30/lessons/148652 시간초과 66.7점
	function test() {
		console.log(solution(3,4,17));
	}

// https://www.acmicpc.net/problem/2178
	function solution(n,l,r) {
		// 오르막수 11057
		let input = 
`2 7
3 5`		
		input = input.split('\n').map(t=>t.split(' ').map(Number));
		let first = input[0];
		let second = input[1];
		console.log( first);
		// fistone * secondtwo + secondone * firsttwo / secondtwo * firsttwo and gcd divide
	}

module.exports = test;