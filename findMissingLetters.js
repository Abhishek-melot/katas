function findMissingLetters(array){
    
    let codeArr=array.map((char)=>{
       return  char.charCodeAt();
    })
    let i=0,j,missingLetter;
    while(i<codeArr.length){
        j=i+1;
        if( codeArr[j] - codeArr[i] === 1 ){
            i++;
        }else{
             missingLetter=String.fromCharCode(codeArr[i]+1);
             return missingLetter;
        }
    }
}

 console.log(findMissingLetters(['a','b','c','d','f']));
 console.log(findMissingLetters(['O','Q','R','S']));
 console.log(findMissingLetters(['O','P','Q','R','T']));
 


/*

[a,b,c,d,f]  = 'e'

1.) convert the array into ascii values using charcodeat.
[O,Q,R,S]    = 'R'
[]

*/