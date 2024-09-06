const fs = require('fs');
let input = fs.readFileSync("/dev/stdin").toString().trim().split('\n');
input = input.map(t=>t.split(' '));
let house = [];
let store = [];
let result = [];
let [ size, max ] = input.shift().map(Number);
for(let i=0; i<input.length; i++){
	for(let j=0; j< input[0].length; j++){
		if(input[i][j] == '1'){
			house.push([i,j]);
		}else if(input[i][j] == '2'){
			store.push([i,j]);
		} 
	}
}
let arrangeStore = getCombinations(store,max);

for(let i=0; i < arrangeStore.length; i++){
	let check = Array.from({length:house.length}).fill(Infinity);
	for(let j=0; j < arrangeStore[i].length; j++){
		let [storeX,storeY] = arrangeStore[i][j];
		for(let k=0; k < house.length; k++){
			let [houseX,houseY] = house[k];
			check[k] = Math.min(Math.abs(storeX-houseX) + Math.abs(storeY-houseY),check[k]);
		}
	}
	result.push(check.reduce((acc,t)=>acc+t,0))
}
console.log(Math.min(...result));
function getCombinations(arr, select){
	const results = [];
	if(select === 1) return arr.map(e => [e]);
	arr.forEach((e, i, o) => {
		const rest = o.slice(i + 1);
		const combinations = getCombinations(rest, select - 1);
		const attached = combinations.map(r => [e, ...r]);
		results.push(...attached);
	})
			
	return results;
}