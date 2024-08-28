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
			}else if(input[i]==')' || input[i]==']'){
				let check = stack[stack.length-1];
				if(check == ']'){

				}else if(check == ')'){

				}

			}
		}
		console.log(stack);
	}


module.exports = test;