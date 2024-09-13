// STRING

// var a = 'a b c d e';
// var b = 'S T U V W';
// var c = 'l m n o p';


// 1. length
// var d = a.length;
// console.log("LENGTH = " + a.length + " " + d);

// 2. to upper case
// let a = 'aMit';
// console.log(a.toUpperCase());

// 3. to lower case
// console.log(b.toLowerCase());

// 4. conacat
// console.log(a.concat(b,c));
// var d = a.concat(b,c);
// console.log(d);

// 5. endsWith return T/F
// let email = 'abc@gmail.in';
// console.log(email.endsWith('.xyz'));

// includes return t/f

// let a = 'Ans@cg.com';
// var d = a.includes('@');
// console.log(d);
// var d = a.includes('A');
// console.log(d);
// var d = b.includes('a');
// console.log(d);


// 6. start with retur T/F
// let a = 'abcdef';
// var d = a.startsWith("a");
// console.log(d);
// var d = a.startsWith("S");
// console.log(d);
// var d = b.startsWith("S");
// console.log(d);

// 7. ends with return T/F
// var d = a.endsWith(' e');
// console.log(d); 

// 8. index of
// var a = 'abc@xyz.com';
// var d = a.indexOf('b');
// console.log(d);

// 9. Char at
// let a = "ramuk";
// var d = a.charAt(4);
// console.log(d);

// 10. charCodeAt (unicode)
// let x = 'a';
// var d = x.charCodeAt(0);
// console.log(d);

// 11. trim

var x = "    avhi   kr     ";
// var d = x.trim();
// console.log(x.length);
// console.log(d.length);


// 12. replace
// var x = "abhi kurmar";
// var d = x.replace('a','s');
// console.log(x);
// console.log(d);


// let x = [2,5,6,7];

// x.toString();
// let b = x.join('--->');
// console.log(b);

// let c = b.split('--->');
// console.log(c)


// 13. split (return array)
// var x = "abhi kurmar";
// var d = x.split(' ');
// console.log(x);
// console.log(d);

// 14. serach
// var x = "abhi kurmabhr";
// var d = x.search('bh');
// console.log(x);
// console.log(d);


// 15. slice
// var x = "abhi kurmar";
// var d = x.slice(2,4);
// console.log(x);
// console.log(d);

// 16. substring
// var x = "abhi kurmar";
// var d = x.substring(2,6);
// console.log(x);
// console.log(d);

// 17. 
// var x = "abhi kurmar";
// for (let i = 0; i < x.length; i++) {
//     console.log( x[i] );
// }


// let x = 'ram kumar singh';

// // output = R K Singh 


// let output = x[0].toUpperCase();

// for ( let i = 1 ; i < x.length ; i++ ) {
//     if ( x[i] == ' ' ) {
//         output += ' ';
//         output += x[i+1].toUpperCase();
//     }
// }


// let spc = 0;
// for ( let i = x.length-1 ; i > 0 ; i-- ) {
//     if ( x[i] == ' ' ) {
//         spc = i ;
//         break;
//     }
// }

// spc += 2 ;

// for ( let i = spc ; i < x.length ; i++ ) {
//     output += x[i].toLowerCase();
// }

// console.log(output);