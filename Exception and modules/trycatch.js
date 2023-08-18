/*
The try ,catch adn finally blockes are used to handle exceptions(a typeod an error)
Before you learn about them, you need to know about the types of errors in programming.

Types of errors

Syntax error:Error in the syntax,For example if you write consol.log('your result');
the above program thros a syntax error .The spelling of console is a mistake in the above code.

Runtime Error: this type of error occurs during the execution of the program.
*/

//Syntax of trycatch block

try{
    //body of try
}
catch(error){
    //body of catch
}

// example 1

try{
    console.log("I am Try Block");
    
    let a=3
    console.log(b);//refrence error
}
catch(error){
    console.log("I am catch block");
    console.log(error);
    
    
}

//example 2
try{
    let b=5;
    console.logsss(b);//TypeError
    
}
catch(e){
    console.log("I am catch block");
    console.log(e);
    
    
}

//finally block

// even is there or no error finally block always executes.

try{
    let a=7
    console.log(b);
    
}catch(e){
    console.log("catch block");
    console.log(e);
    
    
}
finally{
    console.log("I will execute always");
    
}



