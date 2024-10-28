	
	function test() {
		console.log(solution());
	}

	function solution() {
		let input =
`5
6 9 5 7 4`.split('\n');
		let count = input.shift();
		input = input[0].split(' ').map(Number);	
		console.log(input);
		let arr = Array.from({length:count}).fill(0);	
	}	


module.exports = test;