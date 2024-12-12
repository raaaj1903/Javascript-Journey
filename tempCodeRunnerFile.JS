const raj=[1,2,3]
const tutu =raj.reduce(function (acc,currentvalue){
    console.log(`acc ${acc} and currentvalue: ${currentvalue}`);
    
    return acc + currentvalue;
},0)
 console.log(tutu);
 