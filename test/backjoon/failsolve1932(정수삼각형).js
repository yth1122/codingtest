	// //https://school.programmers.co.kr/learn/courses/30/lessons/148652 시간초과 66.7점
	function test() {
		console.log(solution(3,4,17));
	}

// https://www.acmicpc.net/problem/2178
	function solution(n,l,r) {
		let x = `5
7
3 8
8 1 0
2 7 4 4
4 5 2 6 5`;
		console.log(x.split('\n').map(t=>t.split(' ')));
		let input =[[5],[7],[3,8],[8,1,0],[2,7,4,4],[4,5,2,6,5]];
		let size = input.shift();
		let queue = [input.shift()];
		// console.log(queue.shift());
		while(input.length > 0){
			let prev = queue.shift();
			let next = input.shift();
			let step = [];
			
			for(let i = 0; i <prev.length; i++){
					step.push(prev[i]+next[i]);
					step.push(prev[i]+next[i+1]);
			}
			console.log(prev,next);
			queue.push(step);
		}
		console.log(queue);
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