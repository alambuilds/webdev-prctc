// recursive function

let x = 1 ;

function rec() {
    console.log(x);
    x++;
    if ( x <=10 ) {
        rec();
    }
}

rec();