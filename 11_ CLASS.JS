//ARRAOW FUNCTION AND THIS KEYWORD?//
const user = {      //this meaning is current context to accesss the value in object//context =value in object 
    username: "Raj",
    price: 999,

    welcomeMessage: function() {

        console.log(`${this.username}   , wlecome to website`);
        console.log(this);//
        

    }

}

user.welcomeMessage() //Raj   , wlecome to website

user.username="rishi"
user.welcomeMessage()//rishi   , wlecome to website{
//     username: 'rishi',
//     price: 999,
//     welcomeMessage: [Function: welcomeMessage]
//   }

// console.log(this);//return {}

// function chai(){
//     let username = "hitesh"
//     console.log(this.username);
// }

// chai()//undefined  [this ]-keyword is not work in normal function

//INARRAOW FUNCTION//both undefined 

const hii =  () => {  //arraow function
    let username = "hitesh"
    console.log(this);
}

hii()//{}--output

//BASIC OF ARROW FUNCTION//


// const addTwo = (num1, num2) => {
//     return num1 + num2// EXPLICIT RETURN WHEN YOU USE RETURN KEY WORD
// }
// console.log(addTwo(7,8));//15


const addTwo = (num1, num2)=> (num1 +num2)//if you can use ( ) return statment can be not written;NOTE;IMPLICIT RETURN

console.log(addTwo(7,8));//15



( (name) => {
    console.log(`DB CONNECTED TWO ${name}`);
} )('raj')//DB CONNECTED TWO raj






