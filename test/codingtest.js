	// //https://school.programmers.co.kr/learn/courses/30/lessons/148652 시간초과 66.7점
	function test() {
		console.log(solution(3,4,17));
	}

// https://www.acmicpc.net/problem/2178
	function solution(n,l,r) {
		let input =
`6
10
20
15
25
10
20`;
		input = input.split('\n').map(Number);
		// [5,10,100,1,1,1];
		let length = input.shift();
		let max=input[length-1];
		let count = 1;
		// console.log(input);
		for(let i=length-1; i > 0;){
		};
		console.log(max);
	}

module.exports = test;