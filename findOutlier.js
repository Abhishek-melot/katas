function findOutlier(integers){
    let odd=[];
    for(let i=0;integers.length;i++){
        if(integers[i]%2!==0){
          odd.push(integers[i])
        }  
        return odd; 
    }
    
  }


  console.log(findOutlier([10,1,2,4,6]));
  console.log(findOutlier([1,3,5,6,7]));
//   [0,1,2,4,6,8] = 1  // odd
// n%2==0 even
/*
    for(let i=0;i<arr.length;i++){
        arr[i]
    }

*/
//   [1,3,5,6,7,9,11]= 6 // even

