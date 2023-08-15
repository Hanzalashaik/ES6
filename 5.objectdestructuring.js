// object destructuring 
let obj={
    fname:"hanzala",
    age:22,
    phone:2456457,
    place:"hyderabad"
}

// let fname=obj.fname;
// let age=age.obj;
// let phone=obj.phone;
// let place=obj.phone;

// only in one line
//in this order doesn't matter but the variable name should be same
let {fname,age,phone,place}=obj;

//to assign different variable to the key
//let {fname:lname,age,phone,place}=obj;
// console.log(lname,age,phone,place);


console.log(fname,age,phone,place);

let obj1={
    fname:"hanzala",
    age:17,
ph1:4325,
ph2:45345,
ph3:35756,
ph4:768795,
ph5:234345
}

let {firstName,age1,...numbers}=obj1;

console.log(firstName);
console.log(age1);

console.log(numbers);