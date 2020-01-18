//function declaration ...we can access this Declaration before and after intialization
demo();
function demo()
{
    console.log("Function Declaration");
}
demo();

//function Expression ...we can not access Expression before intialization

//without parameter and no return value
//square();
let square=function()
{
    console.log("Square of 3 :",3*3);
}
square();

//function without parameter and return value
let Reminder=function()
{
     return (15%2);
}
let result=undefined;
result=Reminder();
console.log("Reminder :",result);

//function with parameter and no return value
let area=function(length,width)
{
    console.log("Area of Rectangle :",length*width);
}
area(25,12);

//function with parameter and return value
let increment=function(x)
{
    return (x+1);
}
console.log("Increment :",increment(50));