	// 
	function test() {
		console.log(solution());
	}

	function solution() {
		let input =
`5 2
0 2 0 1 0
1 0 1 0 0
0 0 0 0 0
2 0 0 1 1
2 2 0 1 2`.split('\n');
		input = input.map(t=>t.split(' '));
		let house = [];
		let store = [];
		let result = [];
		let [ size, max ] = input.shift().map(Number);
		for(let i=0; i<input.length; i++){
			for(let j=0; j< input[0].length; j++){
				if(input[i][j] == '1'){
					house.push([i,j]);
				}else if(input[i][j] == '2'){
					store.push([i,j]);
				} 
			}
		}
		let arrangeStore = getCombinations(store,max);


		for(let i=0; i < arrangeStore.length; i++){
			console.log(arrangeStore[i]);
		}

		function getCombinations(arr, select){
			const results = [];
			if(select === 1) return arr.map(e => [e]);
		
			arr.forEach((e, i, o) => {
				const rest = o.slice(i + 1);
				const combinations = getCombinations(rest, select - 1);
				const attached = combinations.map(r => [e, ...r]);
				results.push(...attached);
			})
			
			return results;
		}
		
	}
		
	


module.exports = test;