	function test() {
		let k= 80;
		let dungeons = [[50,40],[30,10],[80,20]];
		console.log(solution(k,dungeons));
	}
	function dfs(dungeons,visit,k,result,arr){
		
		for(let i=0; i<dungeons.length; i++){
			if(!visit[i]&&k>=dungeons[i][0]){
				k-=dungeons[i][1] ;
				visit[i] = true;
				arr.push(result+1);
				dfs(dungeons,visit,k,result+1,arr);
				visit[i] = false;
				k+=dungeons[i][1];
			}
		}
	}
	function solution(k,dungeons) {
		let result = 0;
		let arr = [];
		let visit = Array.from({length:dungeons.length}).fill(false);
		dfs(dungeons,visit,k,result,arr);
		return arr.sort(b-a)[0]
	}
module.exports = test;
