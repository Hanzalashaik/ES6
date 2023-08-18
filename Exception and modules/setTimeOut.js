//Method 1
function hanzala(){
    console.log("I am coming in 1 second");
}
setTimeout(hanzala,1000)

/////////////////////////////////////////////////

//Method 2
setTimeout(function hanzala(){
    console.log("I am coming in 2 second");
},2000);

/////////////////////////////////////////

// Method 3
setTimeout(()=>{
    console.log("I am comming in 3 seconds");
    
},3000)