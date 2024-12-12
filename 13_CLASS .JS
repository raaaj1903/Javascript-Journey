//CONTROLL FLOW IN JAVA SCRIPT--->
// if

const isUserloggedIn = true
const temperature = 41

if ( temperature === 40 ){///===COMPARE AND CHECK DATA TYPE BOTH AR SAME CONDTION TRUE OTHERWISE FALSE
    console.log("less than 50");//== COMPARE BOTH SIDE AND VALUE ARE SAME CONDTION TRUEOTHERWISE FALS--->{=ASIGN OPERATOR}
} else {
    console.log("temperature is greater than 50");
}

//BASIC COMPARIOSN OPERATOR IN JAVA SCRIPT-->
//// <, >, <=, >=, ==, !=, ===, !==

// const score=200;
// if(score>100)
// {
//     const power ="fly"
//     console.log(`user power: ${power}`);
    
// }//user power: fly

// console.log(`user power: ${power}`);//ReferenceError: power is not defined RESON :BLOCK SCOP;


const balance = 1000

if (balance > 500) console.log("test"),console.log("test2");

if (balance < 500) {
    console.log("less than 500");
} else if (balance < 750) {
    console.log("less than 750");
    
} else if (balance < 900) {
    console.log("less than 750");
    
} else {
    console.log("less than 1200");

 }


 const balance1 = 1000

if (balance > 500) console.log("test"),console.log("test2");

if (balance < 500) {
    console.log("less than 500");
} else if (balance < 750) {
    console.log("less than 750");
    
} else if (balance < 900) {
    console.log("less than 750");
    
} else {
    console.log("less than 1200");

    console.log("less than 1200");

}///less than 1200;

const isUserloggedIn1 = true
const debitCard=true
const loggedInFromGoogle = false
const loggedInFromEmail = true


if (isUserloggedIn1 && debitCard ) {///&& operator both statment are true

    console.log("allow to buy course");
    
    
}

if (loggedInFromGoogle|| loggedInFromEmail ) {//|| or operator


    console.log("user logged in");
    
    
}


// ******************DAY 2****************//
//  SWITCH CASE STATEMENT:--> BASIC SYNTAX

// switch (key) {
//     case value:
        
//         break;

//     default:
//         break;
// }

const month=3
 switch (month) {
    case 1:
        console.log("january");
        
        break;
    case 2:
        console.log("february");
        
        break;
    case 3:
        console.log("march");
        
        break;
    case 4:
        console.log("march");
        
        break;
    
 
    default:
        console.log("deafult case match");
        
        break;
 }//march



//  ****************DAY 3**************//

const userEmail = []

if (userEmail) {
    console.log("Got user email");
} else {
    console.log("Don't have user email");
}


// NOTES: FALSY VALUES// SOME TYPES FALSY VALUES

// <--false, 0,-0, BigInt(0n),"",null,undefined, nan---> are all the falsy values:IMP NOTE

// <--TRUTHY VALUES-- :"0"--> CONFUSION CREATING QUESTION
//'false'," ", [],{},,function()--empty function



// if (userEmail.length === 0) {
//     console.log("Array is empty");
// }

//NOTES:false==0///true;
    // :false=="";//true;
    // :0=="";//true;


    // ******************day 4*****************8

// NOTES: --> Nullish Coalescing Operator (??): null undefined

let val1;
// val1 = 5 ?? 10 //5
// val1 = null ?? 10//10
// val1 = undefined ?? 15//15

val1=null ?? 10 ?? 15// first value taken//10

console.log(val1);//10


// turneory operator// NOTES: BOTH ARE DIFFERENT

condition ? true : false
 const iceTeaPrice=100;
 iceTeaPrice >=80 ? console.log("less then 80"): console.log("more then 80")
 
 //// less then 80