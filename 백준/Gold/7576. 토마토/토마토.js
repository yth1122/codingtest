const fs = require('fs');
let input = fs.readFileSync("/dev/stdin").toString().trim().split('\n');
input = input.map(t=>t.split(' '));
let [leny , lenx]  = input.shift().map(Number);
let visit = Array.from({length:lenx},()=>Array(leny).fill(false));
let day = 0;
let queue = [];
for(let i=0;i<input.length; i++){
	for(let j=0; j<input[0].length; j++){
		if(input[i][j] == '1') queue.push({x:i,y:j}),visit[i][j] = true
		if(input[i][j] == '-1') visit[i][j] = '-1'
	}
}
while(queue.length){
	let arr=[];
	let count = queue.length
	for(let i=0; i<count;i++){
		let {x,y} = queue.pop();
		if( x+1 < lenx && visit[x+1][y] == false && input[x+1][y] == '0'){
			visit[x+1][y] = true;
			arr.push({x:x+1,y:y});
		}
		if( x-1 >= 0 && visit[x-1][y] == false && input[x-1][y] == '0'){
			visit[x-1][y] = true;
			arr.push({x:x-1,y:y});
		}
		if(y+1 <leny && visit[x][y+1] == false && input[x][y+1] == '0'){
			visit[x][y+1] = true;
			arr.push({x:x,y:y+1});
		}
		if( y-1 >= 0 && visit[x][y-1] == false && input[x][y-1] == '0'){
			visit[x][y-1] = true;
			arr.push({x:x,y:y-1});
		}
	}
	queue = [...arr];
	day++;
};
		
console.log(`${visit.some(t=>t.some(v=>v==false)) == true ? -1 : day -1 }`);