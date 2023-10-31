function wave(str){
    // Code here
    let result=""
    for(let i=0;i<str.length;i++){
        result.push(str.charAt(i).toUpperCase);
    }
    return result;
  }

console.log(wave('hello'));


//   "hello" = ["Hello","hEllo","heLlo","helLo","hellO"]
// length of the array = length of the input string

// result = []
// result.push(str.charAt(i).toUpperCase)