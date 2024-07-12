	// //https://school.programmers.co.kr/learn/courses/30/lessons/148652 시간초과 66.7점
	function test() {
		console.log(solution(3,4,17));
	}

// https://www.acmicpc.net/problem/2178
	function solution(n,l,r) {
		let input = `25 12`;
		input = input.split(' ').map(Number).reduce((acc,t)=>acc*t);
		let result = 0;
		if(input%10 != 0){
			console.log(result);
		}else{
			while(input%10 == 0){
				input = input/10;
				result++;
			}
			console.log(result);
		}
		
	}

module.exports = test;