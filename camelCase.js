function camelCase(str){
    let arr=str.split('');
    
    for(let i=0;i<arr.length;i++){
        let char= arr[i];
        if(char == "-" || char == "_"){
            arr[i+1]=arr[i+1].toUpperCase();
            arr[i]='';
        }
    }
    return arr.join('');
}
console.log(camelCase("the-stealth-warrior"));
console.log(camelCase("The_Stealth_Warrior"));
/*


the-stealth-warrior = theStealthWarrior
The-Stealth-Warrior = T
*/