const fs = require('fs');
let input = fs.readFileSync("/dev/stdin").toString().trim().split('\n');
let length = input.shift();
input =  input.map(t=>t.split(''));
let rginput = input.map(t=>t.map(r=> r=='G' ? 'R' : r));
let visit = Array.from({length:length},()=>Array.from({length:length}).fill(false));
let rgvisit = Array.from({length:length},()=>Array.from({length:length}).fill(false));
let arrow = [[-1,0],[1,0],[0,1],[0,-1]];
let count = 0;
let rg_count = 0;
for(let i=0; i<length; i++){
	for(let j=0; j<length;j++){
		if(!visit[i][j]){
			sameTypeCheck([i,j],input,visit)
			count++;
		}
		if(!rgvisit[i][j]){
			sameTypeCheck([i,j],rginput,rgvisit)
			rg_count++;
		}
	}
}
console.log(count,rg_count);

function sameTypeCheck(check,input,visit){
	let queue = [];
	queue.push(check);
	while(queue.length){
		let qlength = queue.length;
		for(let i=0; i< qlength; i++){
			let [startX,startY] = queue.pop();
			for(let j=0; j<arrow.length; j++){
				let [moveX,moveY] = arrow[j];
				let nx = startX+moveX;
				let ny = startY+moveY;
				if(nx < length &&
					nx >= 0 &&
					ny >=0 &&
					ny < length &&
					!visit[nx][ny] &&
					input[check[0]][check[1]] == input[nx][ny]
				){
					visit[nx][ny] = true;
					queue.push([nx,ny]);
				}
			}
		}	
	}
}
