	// //https://school.programmers.co.kr/learn/courses/30/lessons/148652 시간초과 66.7점
	function test() {
		console.log(solution(3,4,17));
	}

// https://www.acmicpc.net/problem/2178
	function solution(n,l,r) {
		let input = ['but','i','wont','hesitate','no','more','no','it','cannot','wait','im','yours'];
		input = [...new Set(input)];
		
		input.sort((a,b)=> {
			if(a.length!=b.length){
				return a.length - b.length
			}else{
				return a.localeCompare(b)
			}
		} )
		console.log(input.join('\n'));
		// let start = '1';
		// let result = 0;
		// while(n>0){
		// 	n-=1;
		// 	start = start.split('0').join('00000').split('1').join('11011');
		// }
		// for(let i =l-1; i<r;i++ ){
		// 	console.log(start[i]);
		// 	result+= +start[i];
		// }
		// console.log(start);
	}

module.exports = test;