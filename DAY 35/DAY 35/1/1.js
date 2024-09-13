// object

// let x = { "first_name" : "amit" };

// console.log( x.first_name );

// let x = [] ;
// let y = new Array (); 
// x["first_no"] = 4 ;
// x["sec_no"] = 3 ;
// x["thord_no"] = 7 ;

// console.log( x["first_no"] );

// console.log( x.first_no );

// let x = [
//     { "name" : "amit" , "age" : 23 } ,
//     { "name" : "ravi" , "age" : 22 }
// ] ;

// console.log( x[1].name );


// 1. create a object using object literal

// 1.1
// var a = {};

// a['fnm'] = "rohit";  // method 1 fnm is property

// a.lnm = "Kumar";     // merhod 2

// a.xyz = function () { return 1;}; // also assign function (method)

// console.log(a);

// console.log(a.fnm+ ' ' +a.lnm);

// console.log(a.xyz());

// 1.2
// let a = {fnm:"Ravi",lnm:"Kumar",age:25};
// console.log("NAME = "+a.fnm+ ' ' +a.lnm);
// console.log("AGE = "+a.age);
// console.log(a);


// 2. create a object using object Constructor

// 2.1
// var a = new Object();
// a['fnm'] = "rohit";  // method 1
// a.lnm = "Kumar";     // merhod 2
// a.funC = function () { return 1;}; // also assign function (method)
// console.log(a);
// console.log(a.fnm+ ' ' +a.lnm);
// console.log(a.funC());


// 3. Add Delete

// 3.1 ADD
// let a = {fnm:"Ravi",lnm:"Kumar"};
// console.log(a);
// a.age = 25;
// console.log(a);

// // 3.2 DELETE
// delete a.lnm;
// console.log(a);


// 4. function

// function person (nm,age) {
//     return {
//         pnm : nm,
//         pag : age 
//     };
// }

// let p1 = person ("RAVI KUMAR",25);
// let p2 = person ("AMIT KUMAR",26);
// console.log(p1);
// console.log(p2);


// 5. Using Constructor

// function person (a,b) {
//     this.nm = a;
//     this.age = b;
// }

// let x = new person("Ravi",25);
// console.log(x);


// 6. Using anonymous function

// let x = new function () {
//     this.nm = 'Ravi';
//     this.age = 25;
// }
// console.log(x);



// 7. check properties

let a = {fnm:"Ravi",lnm:"Kumar",age:25};


// 7.1
// if(typeof a.age !== 'undefined')
//     console.log('property exist');

// 7.2
// if ( 'age' in a)
//     console.log('property exist');

// 7.3
// if(a.hasOwnProperty('age'))
// console.log('property exist');



// 8. for in 

// let a = {fnm:"Ravi",lnm:"Kumar",age:25};
// for (let x in a) 
//     console.log(a[x]);

    // a.x not working
