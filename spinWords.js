function spinWords(string){
    
    let arr=string.split(' ');
    
    
    let newArr=arr.map(word => {
       return word.length >= 5 ? word.split('').reverse().join('') : word ;
    });

    return newArr.join(' ');
}       


console.log(spinWords("Hey fellow warriors"))

// "Hey fellow warriors" => "Hey wollef sroirraw"