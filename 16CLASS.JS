//LOOPS-->

const myNums=[1,2,3,4,5,6,7,8]

// const myNums1=myNums.filter( (num)=> num>4)
// console.log(myNums1);//[ 5, 6, 7, 8 ]

// const myNums1=myNums.filter( (num)=> {
//     return num>4
// })

// console.log(myNums1);//[ 5, 6, 7, 8 ]


const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];

// let userBooks = books.filter( (bk) =>bk.genre==="history" )

userBooks = books.filter( (bk) => { 
    return bk.publish >= 1995 && bk.genre === "History"
})
console.log(userBooks);//[
    // {
    //   title: 'Book Three',
    //   genre: 'History',
    //   publish: 1999,
    //   edition: 2007
    // }
//   ]



const myNumers12=[1,2,3,4,5,6,7,8,9]
 const newNums=myNumers12.map((num)=>num+10 )
 console.log(newNums);
 //[
//   11, 12, 13, 14, 15,
//   16, 17, 18, 19
// ]



//IN MAPS USING CHAIN-->CONNECT MORE MAP SIMALTANIOUSLY


const myNumers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const newNums = myNumers.map( (num) => { return num + 10})

const newNumsraj = myNumers
                .map((num) => num * 10 )
                .map( (num) => num + 1)
                .filter( (num) => num >= 40)

console.log(newNumsraj);//output--[
//     41, 51,  61, 71,
//     81, 91, 101
//   ]


//reducemethode in array
const raj=[1,2,3]
const tutu =raj.reduce(function (acc,currentvalue){
    console.log(`acc ${acc} and currentvalue: ${currentvalue}`);
    
    return acc + currentvalue;
},0)
 console.log(tutu);

//  acc 0 and currentvalue: 1
// acc 1 and currentvalue: 2
// acc 3 and currentvalue: 3
// 6
 

