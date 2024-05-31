

function test() {
	let maps = [[1,0,1,1,1],[1,0,1,0,1],[1,0,1,1,1],[1,1,1,0,1],[0,0,0,0,1]];
	console.log(solution(maps));
}
// queue 로 다시풀어보기
function solution(maps) {
	console.log(maps);
	let arr = [];
	let xLen = maps.length;
	let yLen = maps[0].length;
	let check = Array.from({length:xLen}).map(t=> Array.from({length:yLen}).fill(false)) ;
	function work(position,distance){
		let curX = position[0],curY = position[1];
		if(curX == xLen-1 && curY == yLen-1){
			arr.push(distance);
		}else{
			if((xLen > curX && curX>-1 )  && ( yLen > curY && curY>-1 ) && maps[curX][curY] == 1 && !check[curX][curY] ){
				console.log(curX, curY);
				
				// console.log(position,distance);
				
				check[curX][curY] = true;	
			
				work([curX-1,curY],distance+1);
				work([curX+1,curY],distance+1);
				work([curX,curY-1],distance+1);
				work([curX,curY+1],distance+1);

				check[curX][curY] = false;	
			} 
		}

		
		
	}
	work([0,0],1);
	console.log(arr.sort());
}
module.exports = test;
