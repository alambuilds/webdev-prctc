// let a = [11,22,33];
// let b = [44,55];
// let c = [66,77];

// console.log(a);

//toSring
// let b = a.toString();  // string return
// console.log(typeof b , b);

//join
// let b = a.join('---');
// console.log(b);

// split [convert into array];
// b = '11,22,33' ;
// let x = b.split(',');
// console.log(x);
// let nm = 'ram kumar singh';
// b = nm.split(' ');
// console.log(b)


// let a = [11,22,33,55,77,7,8];

// for( var i= 0 ; i< a.length ; i++) {
//     console.log(a[i]);
// }


// for in loop -> i is index
// for ( i in a ) {
//     console.log( a[i] );
// }

// for of loop -> x is value
// for ( x of a ) {
//     console.log(x);
// }

// let a = [ 
//     [1,4,3,6] ,
//     [8,6,7]
//  ];

//  for (p of a) {
//     for ( q of  p) {
//         console.log(q);
//     }
//  }

// for(x of a)
//     for (y of x)
//         console.log(y);


// for (p of a) {
//     for ( q in p) {
//         console.log(p[q]);
//     }
//  }



// object
// associtive array
// key value


// let data1 = { "name" : "ravi" , "age" : "18" , "result" : function () { return 1+1 } } ;
// let data2 = [ "ravi" , "18" ];


// for ( x in data1 ) {
//     console.log( x )
// }

// for of not working
// for ( y of data1 ) {
//     console.log( y )
// }


let data = [
    { "name" : "ravi" , "age" : "18" } , 
    { "name" : "amit" , "age" : "17" } , 
    { "name" : "rohit" , "age" : "16" }
];

// console.log(data[1].name)

// for (i =0 ; i < data.length ; i++ ) {
//     console.log(data[i].name)
// }

// for ( i in data ) {
//     console.log(data[i].name);
// } 

// data.forEach ( item => {
//     console.log(item.name , item.age)
// })

// console.log(data1.name , data1["age"] )

// console.log(data2[0] , data2[1])


// let x = { "ques" : "3+5" , "ans" : "8"};  // object

// let z = [ "3+5" , "8" ];

// console.log( x.ques , z[0] );

// console.log( x.ans , z[1] );

// for (let y in x) {
//     console.log( x[y] );
// }