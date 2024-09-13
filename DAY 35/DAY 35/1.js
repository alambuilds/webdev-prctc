// 1. function Closures

var q=4;
function a() {
    var x = 1;
    function b() {
        var y = 2;
        function c() {
            debugger
            var z = 3;  // local var
            console.log(x);
            console.log(y);
            console.log(z);
            console.log(q);
        }
        c(); // call in b
    }
    b(); // call in a
}

a(); // call in global scope
