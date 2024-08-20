	// 
	function test() {
		console.log(solution(3,4,17));
	}

	function solution(n,l,r) {
		let input = '(()[[]])([])'.split('');
		console.log(input);
		let stack = [];
		for(let i=0; i < input.length; i++){
			if(input[i] == '(' || input[i] == '['){
				stack.push(input[i]);
			}else{

			}
		}
		console.log(stack);
	}


module.exports = test;