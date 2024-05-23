//https://school.programmers.co.kr/learn/courses/30/lessons/42577 전화번호 목록
	function solution(scoville, K) {
		let phone_book = ["119", "97674223", "1195524421"];
		console.log(solution(phone_book));
	}

	function solution(phone_book) {
		let hashMap = {}; 
		// 해시에 값들을 담음
		for(let key of phone_book){
			hashMap[key] = 1;
		}
		for(let key of phone_book){
			let text = ""
			for(let i=0; i<key.length; i++){
				text+=key[i];
				if(text != key && hashMap[text]) return false
			}
		}
		return true
	}

// 첫번째 솔루션 실패 효율성 3,4

// 	function solution2(phone_book) {
// 		phone_book.sort((a,b)=>a-b);
// 		 for(let i=0; i < phone_book.length; i++ ){
// 			 for(let j= i+1; j<phone_book.length; j++){
// 				 	if(phone_book[j].startsWith(phone_book[i])){
// 					 return false ;
// 				 	}
// 			 }
// 		 }
// 		 return true
//  }





module.exports = solution;
