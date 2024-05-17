function numvogais(string){
    array = ["a", "e", "i", "o", "u"];
    var num = 0;
    for(let i = 0; i < string.length; i++){
        if(array.includes(string[i])){
            num ++;
        }
    }
    return num;
}
console.log(numvogais("arara"))