// class { OOPS }  // object oriented programing system { class , object }



class car {
    constructor ( a , b ) {
        this.s = a ;
        this.d = b ;
    }
    getDetails () {
        console.log("seats = " + this.s);
        console.log("doors = " + this.d);
    }
}

let x = new car(2,2);
let y = new car(4,4);

x.getDetails();
y.getDetails();


//  1. class expression
// 1.1 unnamed class

// let a = class {
//   constructor(x, y) {
//     this.x = x;
//     this.y = y;
//   }
// };
// console.log(a.name);  // output: "a"

// 1.2 named class
// let b = class c {
//   constructor(a, b) {
//     this.x = a;
//     this.y = b;
//   }
// };
// console.log(b.name);   // output: "c"


// class declration
// 1. 

// class d {
//     constructor(a, b) {
//       this.x = a;
//       this.y = b;
//     }
// }

// let e = new d(5,6);

// console.log(e.x);   // O : 5
// console.log(e.y);   // O : 6