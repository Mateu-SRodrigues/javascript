function invertstr(string) {
    var resultado = string.split("").reverse().join("");      
    var word = "";

    for (var i = string.length - 1; i >= 0; i--) {
        word += string[i];
    }
    return word;
}
console.log(invertstr("múltiplos"));