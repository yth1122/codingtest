	// 
	function test() {
		console.log(solution());
	}

	function solution() {
		let input =
`3 7 7`.split(' ').map(Number);
		let [size , X, Y] = input;
		Z(0,0,Math.pow(size,2));
		let res = 0;
		function Z(curx,cury,size){
			if(curx == X && cury == Y  ){

			};
			
			console.log(X,Y,size);
		}

	}	

	

module.exports = test;