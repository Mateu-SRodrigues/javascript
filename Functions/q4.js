function palindromo(word) {
    var resultado = word.split("").reverse().join("");      
    var palavra = "";

    for (var i = word.length - 1; i >= 0; i--) {
        palavra += word[i];
        }
        if(palavra === resultado){
            return 'true';
        }
        else{
            return 'false';
        }
}
console.log(palindromo("Arara"));