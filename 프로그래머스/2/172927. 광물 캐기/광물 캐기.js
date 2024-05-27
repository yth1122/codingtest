function solution(picks, minerals) {
  	let result = 0;
		let mineral = {'diamond':[1,5,25],'iron':[1,1,5],'stone':[1,1,1] };
		let depuliArr = [];
        let maxLen = picks.reduce((acc,t)=> acc+t,0);
        let len = Math.ceil(minerals.length/5);
       
		for(let i=0; i < len;i++){
            if(i > maxLen-1) break;
			let count = {diamond:0,iron:0,stone:0};
			minerals.splice(0,5).forEach(element => {
				count[element]+=1;
			});
			depuliArr.push(count);
		}
		depuliArr.sort((a,b)=>{
			if(a.diamond == b.diamond){
				if(a.iron == b.iron){
					return b.stone - a.stone;
				}{
					return b.iron - a.iron;
				}
			}
			return b.diamond - a.diamond;
		})
    console.log(depuliArr);
		for(let i=0; i< depuliArr.length; i++){
			let index =0;
			if(picks[0] != 0) index = 0;
			else if(picks[1] != 0 ) index = 1;
			else if(picks[2] != 0 ) index = 2;

			result += depuliArr[i]['diamond'] * mineral['diamond'][index] + depuliArr[i]['iron'] * mineral['iron'][index] + depuliArr[i]['stone'] * mineral['stone'][index];
			picks[index]-=1;

		}		
		

			
		return result;
}