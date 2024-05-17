function palindromo(string) {
    var ref = /[\W_]/g;
    var ref2 = string.toLowerCase().replace(ref, '');
    var resultado = ref2.split("").reverse().join("");      
    return ref2 === resultado;
}
console.log(palindromo("Arara"));