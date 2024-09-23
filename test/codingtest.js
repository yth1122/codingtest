	// 
	function test() {
		console.log(solution());
	}

	function solution() {
		let input =
`3 7 7`.split(' ').map(Number);
		let [size , X, Y] = input;
		Z(X,Y,Math.pow(size,2));
		let arr = [];
		function Z(X,Y,size){
			console.log(X,Y,size);
		}

	}	

	
// [[[0,1,2,3][4,5,6,7][8,9,10,11][12,13,14,15]][[][][][]][[][][][]][[][][][]]]
// [[0,1,2,3][4,5,6,7][8,9,10,11][12,13,14,15]]
// [[0,1,2,3]]
module.exports = test;