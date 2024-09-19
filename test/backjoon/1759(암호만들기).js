const fs = require('fs');
let input = fs.readFileSync("/dev/stdin").toString().trim().split('\n');
let [num, length] = input.shift().split(' ').map(Number);
input = input[0].split(' ').sort();
let vowel = ['a','e','i','o','u'];
let result = getCombinations(input,num);
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
for(let i=0; i<result.length; i++){
	let check = false;
    let count =0;
	for(let j=0; j<num; j++){
		if(vowel.includes(result[i][j])){
			check = true;
		}else{
            count++;
        }
	}
	if(check && count>=2) console.log(result[i].join(''));
}
