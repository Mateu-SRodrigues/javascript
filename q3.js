function fatorial (num){
    for(let i = 1; i <= num; i++){
        console.log(i);
    }
    if(num < 0){
        return 'Número inválido';
    }
}
console.log(fatorial(9));