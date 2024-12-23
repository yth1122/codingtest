	
	function test() {
		console.log(solution());
	}
	function solution() {
		// 1107 리모컨
		let [goal , count , brokenArray] = `500000
8
0 2 3 4 6 7 8 9`.split('\n');
		brokenArray.split(' ').map(Number);
		console.log(goal,brokenArray);

	}	


module.exports = test;

