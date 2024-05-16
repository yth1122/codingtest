function solution(n) {
    //피보나치 수열 dp
 	let fibonachi = [ 1, 2, 3 ];
    if(n<3) return fibonachi[n-1];
    
	for(let i=3; i< n; i++){
		fibonachi[i] = (fibonachi[i-1] + fibonachi[i-2]) % 1234567 ;
	}
    
    return fibonachi[n-1];
}