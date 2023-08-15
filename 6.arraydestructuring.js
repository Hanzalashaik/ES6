let arr=[1,2,3,4,5]

let [one,two,three,four]=arr;

console.log(one ,two ,three,four);


//swapping variable values
let x=10;
let y=5;

[x,y]=[y,x]

console.log(x);//5
console.log(y);//10


// skipping array items
let a=[1,2,10,3];

let [v1,v2, ,v3]=a;

console.log(v1,v2,v3);

//spread in array destructuring

let phonebook=["hanzala",4325,45345,35756,768795,234345,65766876]

let [firstName,...numbers]=phonebook;

console.log(firstName);
console.log(numbers);

