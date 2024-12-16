const fs = require('fs');
let [start,end] = fs.readFileSync("/dev/stdin").toString().trim().split(' ').map(Number);
let visit = Array.from({length:100001}).fill(false);
let queue = [];
let result = [];
queue.push([start,0]);
visit[start] = true;
while(queue.length){
	let [val,count] = queue.shift();
	if(val == end){
		result.push(count); 
		break;
	}
	for(let next of [ val-1, val +1, 2 * val]){
			if(!visit[next] && next >= 0 && next <= 100000 ){
				visit[next]= true;
				if(next == 2 * val){
					queue.unshift([next , count])
				}else{
					queue.push([next , count+1]);
				}
			}
	}
};
console.log(result[0]);