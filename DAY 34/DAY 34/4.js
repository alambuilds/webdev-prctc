// Array
var a = [3,4,8,9,7,4,8,1];
var b = [1,2,5,6,0];
var c = [1,1,1];

// 1. fill function
// console.log(a);
// console.log(a.fill(0));



// 3. slice ( start index , end index ) // array return

// var a = [3,4,8,9,7,4,8,1];
// let x = a.slice(4);     // 7,4,8,1
// console.log(x);  /// 3 -> 9 [9,7,5,8,1] 
// console.log(a);

// var b = a.slice(3);
// console.log(b);

// console.log(a.slice(2,6)); // not include end argument {8,9,7,4}



// 4. splice splice( startWith , count , replaceValue )  // return remaining array

// var a = [3,4,8,9,7,6,8,1];

// console.log(a);
// b = a.splice(3,2 , "ravi" ); //argument not in included
// console.log( b ); // show new array with remaining element

// var d = a.splice(3); //argument not in included

// console.log(d); // show new array of removed element
// b = a.splice(2,2); //argument not in included
// console.log( a ); // show new array with remaining element
// var d = a.splice(2,3); 
// console.log(d);
// console.log(a);
// a.splice(2,3,"amit" ); //argument not in included
// console.log(a); // show new array with remaining element

// b = a.splice(2,4,"abhi")
// console.log(a)


// concat
// z = a.concat(b,c);
// console.log(z);

//5. indexOf indexOf(item,startWith)
// console.log(a);
// var x = a.indexOf(9);
// console.log(x);

//6. reverse

// console.log(a);

// a.reverse();
// console.log(a);

// for(var i=a.length-1;i>=0;i--) {
//     console.log(a[i]);
// }


// 7. toString , join  //array to string

// let x = [2,5,6,7];
// x = x.toString();   // array to string
// x = x.join('---');        // array to string
// console.log(x);


// 8. split // stroig to array 

// let nm = 'ram kumar singh';
// nm = nm.split(' ');
// console.log(nm);


// x = x.split('5');  // string to array
// console.log(x);
