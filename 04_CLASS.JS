// CONCEPT OF STRING IN JAVA SCRIPT:
const name = "raj"
const repoCount = 2005;

//  console.log(name + repoCount + " Value");//OUTOUT-CONCATINATE--raj2005 Value  old METHODE TWO ADD TWO DATA;

 console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);//BACKTICS USE IN PRESENT TIME

 const gameName = new String('onlyraaj')// DIFFERNT WAY TO DECLARE STRING

 console.log(gameName[0]);//--o
// // console.log(gameName.__proto__);---{}


console.log(gameName.length);//--8
 console.log(gameName.toUpperCase());//ONLYRAAJ

 console.log(gameName.charAt(2));//IN SECOND POSITION CHAR INFO
 
 const newStringOne = "  raaj     "
console.log(newStringOne);//  raaj  
console.log(newStringOne.trim());//raaj REMOVE EXTRA SCOP 


// ****************NUMS AND MATHS****************

const score = 400
console.log(score);

const balance = new Number(100)
console.log(balance);

console.log(balance.toString().length);
// console.log(balance.toFixed(1));


// ****************MATHS******************

console.log(Math);//objecct 
console.log(Math.abs(-4)); //- VALUE CHANGE POSITIVE ONLY--
console.log(Math.round(4.6)); //ROUND OF .5 ABOVE=5;
console.log(Math.ceil(4.2)); //4.2=5 IN THIS METHODE
console.log(Math.floor(4.9));//4.9=4
console.log(Math.min(4, 3, 6, 8));//IN ARRAY MIN VALUE--3
console.log(Math.max(4, 3, 6, 8));//IN ARRAY MAX VALUE OF ARRAY-8

 console.log(Math.pow(2,2));//4

console.log(Math.random());
console.log(Math.random()*10+1);

 