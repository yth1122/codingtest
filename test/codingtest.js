	// 
	function test() {
		console.log(solution());
	}

	function solution() {
		let input=
`100 10
1 10
1 10
1 10
1 10
1 10
1 10
1 10
1 10
1 10
1 10
1 10
1 10
1 10
1 10
1 10
1 10
1 10
1 10
1 10
1 10
1 10
1 10
1 10
1 10
1 10
1 10
1 10
1 10
1 10
1 10
1 10
1 10
1 10
1 10
1 10
1 10
1 10
1 10
1 10
1 10
1 10
1 10
1 10
1 10
1 10
1 10
1 10
1 10
1 10
1 10
1 10
1 10
1 10
1 10
1 10
1 10
1 10
1 10
1 10
1 10
1 10
1 10
1 10
1 10
1 10
1 10
1 10
1 10
1 10
1 10
1 10
1 10
1 10
1 10
1 10
1 10
1 10
1 10
1 10
1 10
1 10
1 10
1 10
1 10
1 10
1 10
1 10
1 10
1 10
1 10
1 10
1 10
1 10
1 10
1 10
1 10
1 10
1 10
1 10
1 10`.split('\n');
		// console.log(input);
		input = input.map(t=>t.split(' ').map(Number));
		let [count, goal] = input.shift();
		let dp = Array.from({length:goal+1}).map(t=>[0,0]);
		for(let i=0; i<count; i++){
			for(let j=0; j<goal; j++){
			}
		}

		console.log(dp);
	}

		
	


module.exports = test;