function isIsogram(str){
    str=str.toLowerCase().split('');
    let result=true;
    // for(let i=0;i<str.length;i++){
    //     for(let j=i+1;j<str.length;j++){
    //         if(str[i]===str[j]){
    //             return false; //not an isogram
    //         }
    //     }
    // }
    // return true;
    str.reduce((acc,cv)=>{
       return acc[cv]===undefined ? acc[cv]=1 : result=false;
    },{});
    return result;

}

// abhishek = false
console.log(isIsogram('abhishek')); // false
console.log(isIsogram('Dermatoglyphics')); //true
console.log(isIsogram('Vishnu'));  // true
console.log(isIsogram('mOO'));     // true