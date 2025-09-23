// const array=[1,3,2,4,5,6,7,8,100,200]
// array.forEach((x)=>{
//     // console.log(x+2)
//     if(x>100){
//         console.log(x)
//     }
// })

 const arrfor=[3,5,7,447,78,495,100,1000,500,690]
// arrfor.forEach((x)=>{
//     // if(x<100){
//     //     console.log(x)
//     // }
//      if(x>100){
//         console.log(x)
//     }
    
// })

// const newarr= arrfor.map((num)=>{
//     return num*5
// }

//MAp
// const newArray=arrfor.map((num)=>num*2)
// //  console.log(newarr)
// console.log(newArray)
//  console.log(arrfor);



//  const fruit=["Grapes","MAngo","Orange","Watermelon","kiwi","Apple"]
//  const newfruits=fruit.map((fruits)=>{
//     return fruits
// if(fruits==fruit[0]){
//     return fruit
// }

//  })
//  console.log(newfruits)


 //filtering array

 const num=[3,5,43,4,1,2,9,8,7,6];
//  const result=num.filter((numfilter)=>{
//     return(numfilter>10)
//  })
//  console.log(result)

//  const number=["samiksha","Nirjala","karina","kjina"];
//  const numberresult=number.filter((filter)=>{
//     return (filter=="samiksha")
//  })
// console.log(numberresult)

//Reduce 
const resultReduce=num.reduce((pre,current)=>{
    return pre+current
},0)
console.log(resultReduce)
