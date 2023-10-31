
function getMiddle(s)
{
  let length=s.length;
  let sublen=Math.floor(length/2);
  if(length%2===0){
    return s.substring(sublen-1,sublen+1)
  }else{
    
    return s.substring(sublen,sublen+1)
  }
}

// Test cases

console.log(getMiddle('test'));      // es
console.log(getMiddle('testing'));   // t
console.log(getMiddle('middle'));    // dd
console.log(getMiddle('A'));         // A
console.log(getMiddle('racecar'));   // e
