function table (n,i) {
    return n*i;
}

let n = 5 ;
for ( let i = 1 ; i <= 10 ; i++ ) {
    console.log(`${n} * ${i} = ${table(n,i)}`);
}