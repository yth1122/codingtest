const fs = require('fs');
let input = fs.readFileSync("/dev/stdin").toString().trim().split('');
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
					if(typeof last == 'number'){
						num+=last;
					}else if((last == '(' && input[i]==')') || (last == '[' && input[i]== ']')  ){
						num  *= last =='(' ? 2 : 3 ;
						stack.push(num);
						break;
					}
				}
			}
		}
	}
	console.log(stack.reduce((acc,t)=>acc+t,0))
}else{
	console.log(0);
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
	}
	return check.length ? false: true;	
}