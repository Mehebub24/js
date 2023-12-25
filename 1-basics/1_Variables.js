const name = "Mehebub";
let age =19;
//this is scope by block
{

} 
var emali = "mehebubkalapati@gamil.com";
//this is scoped by function 
function my_function(){
    var myname = "Mehebub kalapati"
    console.log(myname);
}
my_function()
state = "west bengal" 

console.log(name);
console.log(age);
/*
Prefer not to use var 
because of issue in block scope and functional scope
*/


console.table([age, emali,name, state]);
 