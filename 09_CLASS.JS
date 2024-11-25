//************* CONCEPT OF FUNCTION***************/

function sayMyName() {    //define

    console.log("raj");//declre
    console.log("rishi");
    console.log("pratham");
    console.log("prashant");

}

// sayMyName()// call

// function addTwoNumbers(number1,number2){//parameters;
 
//     console.log(number1 + number2);

// }
addTwoNumbers(3,3) //(arguments)---//without give parameter outout-NaN


function addTwo(number1,number2){//parameters;
 
    let result = number1 + number2
    return result// in this keyword return code was not execute in next line

} 
const result=addTwo(6,6)

// console.log("Result: ", result);//12

function loginUserMessage(username = "sam"){
    if(!username){
        console.log("PLease enter a username");
        return
    }
    return `${username} just logged in`
}

console.log(loginUserMessage("raj"));//function loginUserMessage(username = "sam"){
    if(!username){
        console.log("PLease enter a username");
        return
    }
    return `${username} just logged in`//function loginUserMessage(username = "sam"){
        if(!username){
            console.log("PLease enter a username");
            return
        }
        return `${username} just logged in`//raj just logged in
    
    //**************DAY 2 *********


// function calculateCartPrice(num1) {

//     return num1
    
// }
// calculateCartPrice(1)//1

//when value more then onelike--1,2,3



function calculateCartPrice(...num2) {//....rest operator and spread operator same depend where use in condtion

    return num2
    
}
console.log(calculateCartPrice(200,300,400));//[ 200, 300, 400 ] it is output of rest opertaor

//HOW TO PASS OBJECT IN FUNCTION

const user = {//OBJECT
    username: "RAAJ",
    price: 199,
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}

// handleObject(user)//Username is RAAJ and price is 199

handleObject({
    username: "RAAJ",
    price: 199,
})  //Username is RAAJ and price is 199


//HOW TO PASS ARRAY IN FUNCTION::

const myNewArray=[200,300,4000,500]

// function returnSecondValue(getArray) {
//     return myNewArray[1]
    
// }
// console.log(myNewArray);//[ 200, 300, 4000, 500 ]in this case

function returnSecondValue(getArray) {
       return getArray[1]
    
    }

    // console.log(returnSecondValue(myNewArray));//300
    console.log(returnSecondValue([200,300,4000,500]));//SECOND WAY TO ACCESS--300