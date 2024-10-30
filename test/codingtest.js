	
	function test() {
		console.log(solution());
	}

	function solution() {
		let input =
`6 4`;
		console.log(input);
		let [size,count] = input.split(' ').map(Number);
		console.log(size,count);
		// 0 ~ size count로 묶어서 덧셈
		let dp = Array.from({length:count+1},()=> Array.from({length:size+1}).fill(0));
		console.log(dp);
	}	


module.exports = test;