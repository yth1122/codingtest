function solution(phone_book) {
   			let hashMap = {};
		for(let key of phone_book){
			hashMap[key] = 1;
		}
		for(let key of phone_book){
			let text = ""
			for(let i=0; i< key.length; i++){
				text+=key[i];
				if(text != key && hashMap[text]) return false
			}
		}
		return true
}