	// 
	function test() {
		console.log(solution());
	}

	function solution() {
		let input = '(()[[]])([])'.split('');
		let stack = [];

		if(available(input)){
			for(let i=0; i < input.length; i++){
				if(input[i] == '(' || input[i] == '['){
					stack.push(input[i]);
				}else if(input[i]==')' || input[i]==']'){
					let check = stack[stack.length-1];
					if(check == '[' && input[i] == ']'){
						stack.pop();
						stack.push(3);
					}else if(check == '(' && input[i] == ')'){
						stack.pop();
						stack.push(2);
					}else{
						let num = 0;
						
						while(1){
							let last = stack.pop();
							// console.log('ji');
							break;
						}
					}
	
				}
				// console.log(stack);
			}
		}else{
			console.log(0);
		}
	}
		
	
	function available(input){
			let check = [];
			for(let i=0; i<input.length; i++){
				let prev= check[check.length-1];
				if(input[i]==')' && prev == '(' ){
					check.pop();
				}else if(input[i]==']' && prev == '['){
					check.pop();
				}else{
					check.push(input[i]);
				}
				console.log(check);
			}
			return check.length ? false: true;	
	}
		
	


module.exports = test;