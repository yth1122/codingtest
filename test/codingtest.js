	// 
	function test() {
		console.log(solution());
	}

	function solution() {
		let input =
`3 7 7`.split(' ').map(Number);
		let [size , X, Y] = input;
		
		let res = 0;

		Z(0,0,Math.pow(2,size));

		function Z(curx,cury,cursize){
			console.log(curx,cury,cursize);
			if(curx == X && cury == Y  ){
				console.log(res);
			};
			
			if(curx <= X &&  X < curx + cursize && cury <= Y && Y < cury+cursize ){
				cursize = parseInt(cursize/2);
				Z(curx, cury, cursize);
				Z(curx, cury + cursize, cursize);
				Z(curx + size, cury, cursize);
				Z(curx + size, cury + cursize, cursize);
			}else {
				res += cursize * cursize
			}
			
		}

	}	

	

module.exports = test;