// ************ARRAY*************
let raj = ["thor", "Ironman", "spiderman"]
let arr = ["superman", "flash", "batman"]

raj.push(arr)

console.log(raj);//[ 'thor', 'Ironman', 'spiderman', [ 'superman', 'flash', 'batman' ] ]

//spread methode to apply -remove of array  element 


let array =[1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]//input

let real_another_array=array.flat(Infinity)
console.log(real_another_array);//[
    // 1, 2, 3, 4, 5,
    // 6, 7, 6, 7, 4,
    // 5
//   ] OUTPUT


console.log(Array.isArray("raj"))//false it is not ARRAY CHECK ARRAY OR NOT

console.log(Array.from("raj")) //[ 'r', 'a', 'j' ] THIS OPERTAION CONVERTED STRING INTO ARRAY

console.log(Array.from({name: "hitesh"}))//// interesting CASE--[]


let score1 =100;//input
let score2 =1000;
let score3 =105
// of- to create a array 

console.log(Array.of(score1,score2,score3));//[ 100, 1000, 105 ]


console.log(Array.isArray([1, 3, 5]));//CHECK VALUE PASS IN PARAMETER IT IS FORMM ARRAY OR NOT