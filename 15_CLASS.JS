// HIGH ORDER ARRAY LOOPS//
// FOR OF LOOP -->// RETUN VALUES 
// ["", "", ""]
// [{}, {}, {}]

let arr=[1,2,3,4,5]

for (const i of arr) {

    console.log(i);
    
    //1,2,3,4,5
}


// const greetings="hello world";
// for (const i of greetings) {
//     console.log(i);
    
    
// }

// MAPS //only store unique values same value is not repeated

const map =new Map()
map.set('IN',"india")
map.set('USA',"united states of america")

// console.log(map);

for (const [i,value] of map) {
    console.log(i,':-', value);
    
    
}//IN :- india
// USA :- united states of america

const myObject =
{
    game1:"bgmi",
    game2:"pubg",


}
// for (const [i,value] of myObject) {
//     console.log(`object is ${i}`);
    
// } not itirtable

//FOR IN LOOP-->// RETURN KEY LIKE INDEX NUMBER OF ARRAY

const programming = ["js", "rb", "py", "java", "cpp"]

for (const key in programming) {
    console.log(programming[key]);
}


/// MEASURE USSE IN ARRAY FOR EACH LOOP-->

const coding = ["js", "ruby", "java", "python", "cpp"]
// coding.forEach( function (item){
//     console.log(item);
    

// } )//js
// // ruby
// // java
// // python
// // cpp --->NORMAL FUNCTION USE IN


// coding.forEach( (item)=>{
//     console.log(item);
    
// })//ARROW FUNCTION USE IN OUTPUT SAME

coding.forEach( (item,arr,index)=>{
    console.log(item,index,arr);
    

})
// js [ 'js', 'ruby', 'java', 'python', 'cpp' ] 0
// ruby [ 'js', 'ruby', 'java', 'python', 'cpp' ] 1
// java [ 'js', 'ruby', 'java', 'python', 'cpp' ] 2
// python [ 'js', 'ruby', 'java', 'python', 'cpp' ] 3
// cpp [ 'js', 'ruby', 'java', 'python', 'cpp']


const myCoding = [
    {
        languageName: "javascript",
        languageFileName: "js"
    },
    {
        languageName: "java",
        languageFileName: "java"
    },
    {
        languageName: "python",
        languageFileName: "py"
    },
]

myCoding.forEach( (item) => {
    
    console.log(item.languageName);
} )//javascript
// java
// python