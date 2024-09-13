// Higher Order Functions Array

// let age = [ 4,5,7,8,12,1,23,4,66,45,18,71,17 ];


// const x = [9,7,8,5,4,6,3,1,2];

// 1. filter // array return

// 1.1 using an fn  { return array }

// const y = x.filter( function (z) {
//     if (z>5) {
//         return true;
//     }
// });
// console.log(y);

// 1.2 usin ar fn

// const y = x.filter( z => z>=2 && z <= 5 );
// console.log(y);



// 2. Map // return array

// const x = [9,7,8,5,4,6,3,1,2];


// 2.1
// const y = x.map(function (z) {
//     return z*2;
// });
// console.log(y);

// 2.2
// const y = x.map( z => z*3 );
// const y =  x.map((z) => Math.sqrt(z));
// console.log(y);

// 2.3
// const y = x.filter(z => z > 5 ).map(z => z*3).sort( (a,b) => a-b );
// console.log(y);



// 3. Sort // array return

// const x = [9,7,8,5,4,10,100,6,3,1,2];

// let y = x.sort ( (a,b) => a-b );

// console.log(y);

// 3.1

// const y = x.sort(function (a,b) { 
//     return b-a; 
// });
// console.log(y);

// 3.2

// const y = x.sort((a,b) => b-a);
// const y = x.sort((a,b) => b-a);
// console.log(y);


// 4. Reduce // single value return

// 4.1

// const y = x.reduce(function (sum,a) {
//     return sum+a;
// },0);
// console.log(y);

// 4.2
// const x = [2,4,3];
// const y = x.reduce( (sum,a) => sum+a , 0);
// console.log(y);

// 5. for each

// let arr = [ 3,4,5,6,9,0 ];

// arr.forEach ( function (value , index , array ) {
//     console.log( value );
// });

// a.forEach( value => console.log(value) )