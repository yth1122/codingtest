	// 
	function test() {
		console.log(solution());
	}

	function solution() {
		let input = '(()[[]])([])'.split('');
		let stack = [];
		for(let i=0; i < input.length; i++){
			if(input[i] == '(' || input[i] == '['){
				stack.push(input[i]);
			}else{
				if(input[i]==')'){
					stack.pop();
				}
				

			}
		}
		console.log(stack);
	}


module.exports = test;