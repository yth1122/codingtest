function solution(k, dungeons) {
  		let result = 0;
		let arr = [];
		let visit = Array.from({length:dungeons.length}).fill(false);
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
    
        dfs(dungeons,visit,k,result,arr);
		return arr.sort((a,b)=>b-a)[0]
}