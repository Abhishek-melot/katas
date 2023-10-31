function divisors(integer) {
    let result=[];
    for(let i=2;i<=integer-1;i++){
      if(integer%i===0){
         result.push(i); 
      }
    }
    if(result.length===0){
        return `${integer} is prime`
    }else{

        return result;
    }
    
  }
console.log(divisors(12));
console.log(divisors(13));
// Don't include 1 and the number itself;
//   12 =[2,3,4,6]