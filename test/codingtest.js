	
	function test() {
		console.log(solution());
	}
	function solution() {
		// 1929 소수구하기 https://www.acmicpc.net/problem/1929
		let [start ,end] =
`3 16`.split(' ').map(Number);
		console.log(start,end);
		let check = [2,3,5,7];
		for(let i = start ; i <= end; i++){
			let bool = false;
			for(let j=0; j<check.length; j++){
				if(i == check[j]){
				}else if(i % check[j] == 0){
					bool = true;	
					break;
				}
			}
			if(!bool) console.log(i);
		}
	}	


module.exports = test;

