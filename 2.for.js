//there are total 7 types of loops

// for loop 
// while loop
// do while loop
// for Of
// for in
// forEach
// Map

//***********for in********* */

// Objects==> for in loop
//for in loop allows us to to iterate over all propertise of a key of an object

//1.you can iterate through objects to get all keys
//2.you can also iterate through a string values

//IMP Note: you should'not use for in loop to iterate over an array where the index order is important

// let obj={
//     fname:"hanzala",
//     age:22,
//     num:358978347
// }

// for(let i in obj){
//     // console.log(i);
//     /*fname
//     age
//     num*/
    
//     // for values
//     console.log(obj[i]);
//     /*
//     hanzala
//     22
//     358978347
//     */
    
// }

// for of loop

/*

for of loop is JavaScript allows you to iterate over objects datatypes (arrays,sets,string)
*/

//arrays
let arr=["hanzala","musaib","sakina"];

for(let i of arr){
    console.log(i);
    
}

//output
// hanzala
// musaib
// sakina

//string

let str="hanzala"

for(let j of str){
    console.log(j);
    
}

// output
// h
// a
// n
// z
// a
// l
// a

//sets

let data=new Set([1,2,3,4])

for(let k of data){
    console.log(k);
    
}
//output
// 1
// 2
// 3
// 4

/*
for of 
1.used in arrays ,string,maps,sets
2.used to iterate over values

for in 
1.used in objects and strings
2.use to iterate over keys

*/