function order(words){
    let res=[];
  if(words===""){
    return "";
  }else{

   words= words.split(' ');
    let count=0;
    for(let i=0;i<words.length;i++){
        let word=words[i].split('');
        for(let j=0;j<word.length;j++){
            if(count==word[j]){
                res[j]=word.join('');
            }
            count+=1;
        }  
        return res;
    }
  }
}

// "is2 Thi1s T4est 3a" = "Thi1s is2 3a T4est"
// "is2"=> ["i","s","2"]

console.log(order("is2 Thi1s T4est 3a" ));