// BASIC CONCEPT OF LOOPS(ITIRATORS-ITIRATION) STARTING--> FOR LOOP

// for (let index = 0; index < array.length; index++) {
//     const element = array[index];
    
// }

let myArray = ["flash", "batman", "superman"]
// console.log(myArray.length);//3
for (let index = 0; index < myArray.length; index++) {
    const element = myArray[index];
    console.log(element);
    
}// flash ,batman, superman

// NOTES : KEYWORDS--> BREAK AND CONTINUE

// for (let index = 1; index <=20; index++) {
//   if(index==5){
//     console.log(`detected 5`);
//     break;// code not complie with break statment;
    
//   }
     
//     console.log(`value of i is  ${index}`);
    
// }// value print

for (let index = 1; index <=8; index++) {
  if(index==5){
    console.log(`detected 5`);
    continue;// give another chance 
    
  }
     
    console.log(`value of i is  ${index}`);
    
}//value of i is  1
// value of i is  2
// value of i is  3
// value of i is  4
// detected 5
// value of i is  6
// value of i is  7
// value of i is  8


// CONCEPT OF WHILE LOOP-->
 let index =0;
while (index<=10) {
  console.log(`value of index is${index}`);
  index =index+2;
  
  
}

let myArray1=["raj","pratham","prasant"]
let arr=0;

while (arr<myArray1.length) {
  console.log(`value is ${myArray1[arr]}`);
   arr=arr+1;
  
  
}//value is raj
// value is pratham
// value is prasant

//DO WHILE LOOP-->  FIRST WORK DONE THEN CONDTION CHECK

let raj=11;

do {
  
console.log(`score is ${raj}`);
raj=raj+1;


} while (raj<=10);//11
