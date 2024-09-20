	// 
	function test() {
		console.log(solution());
	}

	function solution() {
		let input =
`3 7 7`.split(' ').map(Number);
		let [size , X, Y] = input;
		Z(size);
		let arr = [];
		function Z(size,array){
			let arr = [];
			if(size >= 1 ){
				for(let i=0; i<size; i++ ){
					let count = -1;
					let innerArray = [];
					for(let j=0; j<4; j++){
						count ++;
						innerArray.push(count);
					}
					console.log(innerArray);
				}
			}
		}
	}	
		
	
// [[[0,1,2,3][4,5,6,7][8,9,10,11][12,13,14,15]][[][][][]][[][][][]][[][][][]]]
// [[0,1,2,3][4,5,6,7][8,9,10,11][12,13,14,15]]
// [[0,1,2,3]]
module.exports = test;