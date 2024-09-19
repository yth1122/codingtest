const fs = require('fs');
let input = fs.readFileSync("/dev/stdin").toString().trim().split('\n');
let num = input.shift();
let controlArray = ( array, reverse ) =>{
	if(reverse){
		array.pop();
	}else if(!reverse){
		array.shift();
	}
	return array;
}

while(input.length){
	let [command , size , stringArray] = input.splice(0,3);
	let array = JSON.parse(stringArray);
	let reverse = false;
    let error = false;
	for(let i=0; i<command.length; i++){
		if(command[i] == 'R' ){
			reverse = !reverse;
		}else if(command[i] == 'D'){
			if(array.length == 0){
				error = true;
			}else{
				array = controlArray(array,reverse);
			}	
		}
	}
	console.log( !error ? JSON.stringify(reverse ? array.reverse(): array) : 'error');