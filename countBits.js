var countBits = function(n) {
    let binDig="";
    
    while(n>=1){
        binDig+=n%2;
        n=Math.floor(n/2);
    }
    // return binDig.split('').reverse().join('');
    return binDig.split('').reduce((acc,cv)=>{
        cv==='1'? acc++: acc;
        return acc;
    },0)
  };

  console.log(countBits(1234));
  console.log(countBits(13));
  console.log(countBits(7));
  console.log(countBits(9));