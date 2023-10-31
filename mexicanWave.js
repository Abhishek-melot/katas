function wave(str){
    // Code here
    let result=[];
    let input=str;
    for(let i=0;i<input.length;i++){
        let caps=input.charAt(i).toUpperCase();
        let newStr=input.replace(input.charAt(i),caps);
        result.push(newStr);
        input=str;
    }
    return result;
  }

console.log(wave('hello'));


//   "hello" = ["Hello","hEllo","heLlo","helLo","hellO"]
// length of the array = length of the input string

// result = []
// result.push(str.charAt(i).toUpperCase)