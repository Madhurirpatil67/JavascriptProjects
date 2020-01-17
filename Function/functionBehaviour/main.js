// function without parameter and no return value

function add()
{
    let num1=20;
    let num2=80;
    console.log("Addition :",num1+num2);
}
add();

// function without parameter and return value
function sub()
{
    let num1=20;
    let num2=80;
    return(num2-num1);
}
let result=undefined;
result=sub();
console.log("substraction :",result);

// function with parameter and no return value
function mul(num1,num2)
{
    console.log("Multiplication :",num2*num1);
}
mul(15,20);

// function with parameter and return value
function div(num1,num2)
{
    return(num2/num1);
}
result=div(15,5);
console.log("Division :",result.toFixed(2));