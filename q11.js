function mdc(n1, n2){
    let comum = 1;
    for(let i = 2;i <= n1 && i <= n2; i++){
            if(n1 % i === 0 && n2 % i === 0){
                comum = i;
            }
        }
    return comum;
}
console.log(mdc(10, 30));