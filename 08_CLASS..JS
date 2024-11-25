//***************OBJECT************//


const mySym = Symbol("key1")// use of symbol;
//CREATE OBJECT//

const JsUser = {
    name: "Hello JS user",
    "full name": "Raj Jaiswal",
 //[mySym]: "mykey1",// formet to write and add sybmbol IN  object--- WITHOUT THIS FORMATE USE SYMBOL DATA TYPE -STRING
    age: 18,
    location: "Jaipur",
    email: "Raj@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

// HOW TO ACCESS OBJECT DATA :

// console.log(JsUser.email)// WAY NO 1--Raj@google.com

// console.log(JsUser["email"])//WAY NO 2-Raj@google.com

// console.log(JsUser["full name"])//Raj Jaiswal--["full name"]--USE SQUARE NOTAION TO ACCESS

// console.log(JsUser[mySym])//mykey1

// console.log(typeof(mySym));//symbol

//HOW TO CHANNGE OBJECT DATA
JsUser.email="rishi@2005";
console.log(JsUser.email);//rishi@2005

//FREEEZ DATA IN OBJECT

//Object.freeze(JsUser)//methode apply

JsUser.email="sgfdgfsdgf";
console.log(JsUser.email);//no change object data


JsUser.greeting = function(){
    console.log("Hello JS user");
}
JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);
}

console.log(JsUser.greeting());//Hello JS user
console.log(JsUser.greetingTwo());//Hello JS user,raj


// **************DAY2**************//


//const tinderUser = new Object()// diffrence both-singleton object

const tinderUser = {}//non singleton object

tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false

console.log(tinderUser);//{ id: '123abc', name: 'Sammy', isLoggedIn: false }


//object in object

const regularUser = {
    email: "some@gmail.com",
    fullname: {    //object-1
        userfullname: {   //object--2
            firstname: "Raaj",
            lastname: "Jaiswal"
        }
    }
}

//console.log(regularUser.fullname);//{ userfullname: { firstname: 'hitesh', lastname: 'choudhary' } }

console.log(regularUser.fullname.userfullname.firstname);//Raaj


//two object merge

const obj1={1:"a",2:"b"}
const obj2 ={3:"a",4:"b"}

// const obj3={obj1,obj2}
// console.log(obj3);//{ obj1: { '1': 'a', '2': 'b' }, obj2: { '3': 'a', '4': 'b' } }

//merge sepratly

// const obj4=Object.assign({},obj1,obj2)//{}--target;obj--sources
// console.log(obj4);//{ '1': 'a', '2': 'b', '3': 'a', '4': 'b' }


///spread operator

const raj={...obj1,...obj2}
console.log(raj);//{ '1': 'a', '2': 'b', '3': 'a', '4': 'b' }


// ***********DAY 3 ***********//

const course = {
    coursename:"js in hindi",
    Price: "999",
    courseInstructor:"raj",
}

// course.courseInstructor

const {courseInstructor} =course
console.log(courseInstructor);//raj

//object destrutaring// rename,


const {Price:p} =course

console.log(p);//999


