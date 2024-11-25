// CONVERSION OPERATIOM IN JAVA SCRIPT:


let score = "RAJ";
// let score ="33raj" when string is not convert in number give  result NAN
// let score =null; //give-0 ans;
// let score =undefined;// undefine

// console.log(typeof score);
console.log(typeof(score));//STRING

let valueInNumber = Number(score) //CONVERT NUMBER BY THE HELP OF Number key word
console.log(typeof valueInNumber);//NUMBER
console.log(valueInNumber);//NAN


 let isLoggedIn=1;
 let booleanIsLoggedIn= Boolean(isLoggedIn)
 console.log(typeof(isLoggedIn));
 console.log(booleanIsLoggedIn);
 
//<<--// 1 => true; 0 => false
// "" => false
// "raj" => true

let someNumber = 33// number

let stringNumber = String(someNumber)
console.log(stringNumber);
console.log(typeof stringNumber);//convert in string

// ************************OPERATION***********************

let value = 3 //INPUT
let negValue = -value
console.log(negValue);// AFTER OUTPUT-(-3)

//SOME BASIC ARTHAMATIC OPERATION 

// console.log(2+2); 4
// console.log(2-2); 0
// console.log(2*2); 4 
// console.log(2**3);8
// console.log(2/3); 0.66666
// console.log(2%3); 2


let str1 = "hello" //INPUT
let str2 = " RAJ"

let str3 = str1 + str2
console.log(str3);//OUTPUT--hello RAJ

// **************TRICKY QUESTOION BASIC LEVEL******

console.log("1" + 2);//12
console.log(1 + "2");//12
console.log("1" + 2 + 2 + 3);//1223
console.log(1 + 2 + 4 + "2");//72

console.log( (3 + 4) * 5 % 3);//2

console.log(+true);//1
console.log(+"");//0

let gameCounter = 100//INPUT
++gameCounter;
console.log(gameCounter);//101;


// **************************MEMORY ****************
// STACK (PRIMATIVE);// to  creat a copy and update it
let raj ="raj jaiswal"
let anotherName=raj
anotherName= "rishi"

console.log(raj);
console.log(anotherName);


//HEAP (MON PREMATIVE) original value me change hotaa h
