//function declaration
function demoDeclare()
{
    console.log("Function Declaration");
}
demoDeclare();

//function Expression-wrap in one variable
let demoExpression=function()
{
    console.log("Function Expression");
}
demoExpression();

//Arrow Function/lambda Expression-without using keyword function

//Multiple Statement
let result=undefined;
let area=(length,width)=>{
 result=length*width;
 return result;
}
result=area(7,9);
console.log(result);

//single statement
let display=()=>console.log("This is Arrow Function");
display();

let displayName=(strName)=>strName;
console.log(displayName("Madhuri Patil"));