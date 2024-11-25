//*************SCOP IN FUNCTION AND DESCRIPTION */
// {} SCOP 

var c=300;//global variable
let a=300;

if(true)
{
    let a = 300;//**** */
    const b=20;  //BLOC SCOP
    var c=60;/////*******8 */

}
// console.log(a);//ReferenceError: a is not defined

// console.log(b);//ReferenceError: b is not defined

// console.log(c);//60
console.log(a);//300

//*****************DAY 2******** */

function one() {

    const username="raj"
    function two() {
    
   const website="youtube"
   console.log(username);

    }
    //console.log(website); //ReferenceError: website is not defined reson scop end

    two()
    
}
one()//raj ---output-

if (true) {
    const username = "RAAJ"
    if (username === "RAAJ") {
        const website = " youtube"
        console.log(username + website);
    }
    // console.log(website);//ReferenceError: website is not defined
}

// console.log(username);//ReferenceError: username is not defined OUT OF BLOCK SCOP
//OUTPUT--RAAJ youtube


// ************************INTERESTING CONCEPT*********

console.log(addone(5));//6

function addone(num){
    return num+1
}



addTw0(5)//ReferenceError: Cannot access 'addTw0' before initialization reson is expression 
const addTw0=function(num){//expression 
    return num+2
}


