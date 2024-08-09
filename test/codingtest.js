	// 
	function test() {
		console.log(solution(3,4,17));
	}

	function solution(n,l,r) {
		let input = 
`(()[[]])([])`;
		let stack = [];
		let result = 0;
		for(let i = 0; i<input.length; i++){
			if(input[i] === ")"){
				if(stack[stack.length-1] === "("){
					result += 2 ;
					stack.pop();
				} else {
					stack.push(input[i]);
				}
			}else if (input[i] === "]"){
				if(stack[stack.length-1] === "["){
					result +=3;
					stack.pop();
				} else {
					stack.push(input[i]);
				}
			}else {
				stack.push(input[i]);
			}
		}
		console.log(stack,result);
	}


module.exports = test;