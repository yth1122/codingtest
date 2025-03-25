	
	function test() {
		console.log(solution());
	}
	function solution() {
		// 1931 회의실 배정 https://www.acmicpc.net/problem/1931
		let input =
`11
1 4
3 5
0 6
5 7
3 8
5 9
6 10
8 11
8 12
2 13
12 14`.split('\n');
		input.shift();
		input.sort((a,b)=>{
			let [startA,endA] = a.split(' ').map(Number);
			let [startB,endB] = b.split(' ').map(Number);
			if(startA == startB) return endA - endB
			return startA - startB;	
		})
		console.log(input);
	}	

module.exports = test;

