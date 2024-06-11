const fs = require('fs');
let input= fs.readFileSync("/dev/stdin").toString().trim();

input = input.toUpperCase();
let obj = {};
let result = [];

for(let i=0; i<input.length; i++){
	if(obj[input[i]]){obj[input[i]]+=1}
	else{ obj[input[i]]=1};
}
for(let key in obj){
	result.push({key:key,value:obj[key]});
}
if(result.length <2){
			console.log(`${result[0].key}`);
		}else{
			result.sort((a,b)=> b.value - a.value);

			console.log(`${result[0].value != result[1].value ? result[0].key : '?'}`);
		
}