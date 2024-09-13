let x = 1 ;

function printX() {

    console.log(x);
    x++;

    if ( x <= 10 ) {
        printX();
    }
}

printX();