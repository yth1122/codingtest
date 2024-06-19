const fs = require('fs');
let input = fs.readFileSync("/dev/stdin").toString().trim().split(' ').map(Number);
let [start,end] = input;
let visit = Array.from({length:end+1}).fill(false);
let queue = [[start,0]];
while(queue.length){
	let [value,count] = queue.shift();
	if(visit[value]) continue;

	visit[value] = true;
	if(value == end){
		console.log(count); 
		break;
	} 

	for(let result of [value-1,value+1,2*value]){
		if(!visit[result] && result>=0 && result <= 100000 ){
			queue.push([result,count+1]);
		}
	}
}