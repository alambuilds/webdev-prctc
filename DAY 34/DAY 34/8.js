// factorial using recursive function


function fact (n) {
    if ( n > 0 )
         n * fact (n-1);
    else
        return 1 ;
}

console.log(fact(5));