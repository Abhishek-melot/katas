function breakCamelCase(str){
    
    let arr=str.split('');
    
    for(let i=0;i<arr.length;i++){
        if(arr[i] === arr[i].toUpperCase()){
            arr.splice(i,0," ");
        }
    }

    return arr.join('');

}



// "camelCase" -> ['c','a','m','e','l','C','a','s','e']

// "camelCase" = "camel Case"
console.log(breakCamelCase("camelCase")) 