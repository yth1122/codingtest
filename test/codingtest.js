	// 
	function test() {
		console.log(solution(3,4,17));
	}

// https://www.acmicpc.net/problem/2078
	function solution(n,l,r) {
		let input = `10 3`.split(' ').map(Number);
		let result = input[0] < input[1] ? `${input[0]-1} ${(input[1]-1)/input[0]}` : `${(input[0]-1)/input[1]} ${input[1]-1}`;
		console.log(result);
		
	}


module.exports = test;