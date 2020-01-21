//Default parameters
function display(FirstName,lastName,age=18)
{
    return `My Name is ${FirstName} ${lastName} with age :${age}`;
}
console.log(display("Madhuri","Patil",27)); // take age=27

console.log(display("Pratik","Sawant")); //its take default parameter age=18

console.log(display("Ranjit","Patil",30,"ME")); //It does not take last parameter("ME")

console.log(display(20,"Piya","sankpal")); //It's not correct Sequence

console.log(display("Pratik")); //take default parameter age=18 but give lastname=undefined