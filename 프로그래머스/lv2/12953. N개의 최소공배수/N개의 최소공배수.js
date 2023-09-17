function solution(arr) {
    function e(a,b){
    return a*b/q(a,b)
  }

  function q(a,b){
    if(b%a==0){
      return a
    }else{
      return q(b%a,a)
    }
  }
    return arr.reduce((acc,t)=> acc= e(acc,t))
}