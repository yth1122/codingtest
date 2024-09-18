	// 
	function test() {
		console.log(solution());
	}

	function solution() {
		let input =
`4
RDD
4
[1,2,3,4]
DD
1
[42]
RRD
6
[1,1,2,3,5,8]
D
0
[]`.split('\n');
		console.log(input);
		let num = input.shift();
		let result = Array.from({length:num}).fill('error');
		console.log(input.splice(0,3),input)
	}
		
	


module.exports = test;