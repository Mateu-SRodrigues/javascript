function mmc(n1, n2){
    let comum = 1;
    for(let i = 2;i <= n1 && i <= n2; i++){
        for(let j = 2;j <= n1 && j <= n2; j++){
                if(n1 * i === n2 * j){
                    comum = i;
                }
            }
        }
    return comum;
}
console.log(mmc(15, 18));