// const isAdmin=true
// if(isAdmin){
//     console.log("Welcome to Admin dashboard")
// }else{
//     console.log("you are not admin")
// }


const isAdmin=false
if(isAdmin){
    console.log("Welcome to Admin dashboard")
}else{
    console.log("you are not admin")
}

//Student Mark

const marks=10;
if(marks>=90&&marks<100){
    console.log("Grade:A+");
}else if(marks>=80&&marks<90){
    console.log("Grade:A")
}
else if(marks>=70 && marks<80){
    console.log("Grade:B+")
}
else if(marks>=60 && marks<70){
    console.log("Grade:B")
}
else if(marks>=50 && marks<60){
    console.log("Grade:C+")
}
else if(marks>=40 && marks<50){
    console.log("Grade:C")
}
else{
    console.log("You got Fail")
}

//Ternery operator
let mark=60
mark>=40?console.log("You are pass"):console.log("You are fail")


//for loop

for(let i=0;i<=10;i++){
    console.log(i)
}

//for of loop
// let arr=[1,2,3,4,5]
// for(let x of arr){
//     console.log(x)
// }

//sum using for of loop
let sum=0
let Arr=[4,7,9,1,2,3]
for(let x of Arr){
    sum+=x
}
    console.log(sum);

    // multiply using for of loop 

    let multiply=1
    let mul=[2,4,5,6]
    for(let x of mul){
        multiply*=x
    }
        console.log(multiply);

let string="Samiksha"
for(let x of string){
    console.log(x)
}
// OBJECT CREATE
const obj={
    name:"Samiksha",
    faculty:"BCA"
}
for(let i in obj){
    // @ts-ignore
    console.log("My "+i + " is "+obj[i])
}


