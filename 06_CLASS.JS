//CONCEPT OF ARRAY  BASICS:The Array object, as with arrays in other programming languages, enables storing a collection of multiple items under a single variable name, and has members for performing common array operations.

let myArr=[0,1,2,4,5]//DIFERENT WAY TO DECLARE ARRAY
let myHeors=["shaktimaan","chota beem"]

// const myArr2 = new Array(1, 2, 3, 4);
// console.log(myArr.length);//7
console.log(myHeors[0]);//SHAKTIMAN



// ****ARRAY METHODE*********


let myArr2=[0,1,2,3,4,5]
myArr2.push(7)// ELEMENT--INSERT IN LAST INDEX IN ARRAY
//  myArr.push(7)
 myAr2.pop()// ELEMENT DELETE IN LAST INDEX OF ARRAY

 myArr2.unshift(9)//ELEMENT ADD IN FIRST INDEX IN ARRAY

 myArr2.shift()//ELEMNT DELETE IN FIRST INDEX IN ARRAY

console.log(myArr2.includes(9))// IN ARRAY DATA PRESNT otuput--true// NOT PRESENT IN DATA -OUTPUT-FALSE;
// console.log(myArr.indexOf(3));//TRUE

// const newArr = myArr.join()

// console.log(myArr);
// console.log( newArr);

// **************** SLICE AND SPLICE************

//:slice
 let raj=[1,2,3,4,5];
 console.log(raj);
 console.log(raj.includes(9));//9present or not in arrray
 console.log(raj.slice(1,3));// in last RANGE ex 3 is not include
 
// *** [ 1, 2, 3, 4, 5 ]
// false
// [ 2, 3 ]--**output slice
 console.log(raj);

//  [ 1, 2, 3, 4, 5 ] after slice opertsion in array not change STACK memory copy create;
 

let raj2=[1,2,3,4,4];
console.log(raj2);
console.log(raj2.splice(1,3)); //all parameter index RANGE included 1to-3;

// ***output***--[ 1, 2, 3, 4, 4 ]
// [ 2, 3, 4 ]
console.log(raj2);

// [ 1, 2, 3, 4, 4 ]
// [ 2, 3, 4 ]
// [ 1, 4 ]

// :AFTER APLLY SPLICE METHODE VALUE OF ORIGINAL ARRAY IN CHANGED--
// [ 1, 4 ]

// IMPORTENT NOTES:IN SPLICE METHIDE ORIGIANL ARRAY VALUE IS CHANGED--HEAP MEMORY



