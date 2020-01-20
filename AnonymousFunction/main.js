//simple function
function submit()
{
    console.log("Submit Call");
}
submit();

//Anonymous Function- without any name
(
    function(){
        console.log("Anonymous Function");
    }
)();

//Arrow Anonymos Fn
(
    ()=>{console.log("Arrow Anonymous Function");}
)();

//Expression Anonymous Function
let anon=function(){
    console.log("Expression Anonymous Function");
}
anon();

(
    function(msg){
        alert(msg);
    }
)("Hello");