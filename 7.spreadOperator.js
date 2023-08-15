//spread operator

//it is used to expand or spread an iterable array

let even=[2,4,6,8];
let odd=[1,3,5,7,9];

let total=[...even,...odd]
console.log(total);//[1,2,3,4,5,6,7,8,9]


//cloning in arrays using spread

let arr1=[1,2,3,4]
let arr2=arr1;//it will copy the value till end of the program

console.log(arr2);

arr1.push(5);
console.log(arr1);
console.log(arr2);


// using spread

let arr3=[1,2,3,4]
let arr4=[...arr3];//it will copy the value only once ehich is initial value.

arr1.push(5);
console.log(arr3);
console.log(arr4);

