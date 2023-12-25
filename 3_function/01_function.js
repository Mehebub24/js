function SayMyName (){
    console.log("M");
    console.log("E");
    console.log("H");
    console.log("E");
    console.log("B");
    console.log("U");
    console.log("B");
}
//this is referens 
SayMyName
//this is exution 
SayMyName();
function addTwoNumbers(nam1, nam2){
    console.log(nam1+nam2);
}

addTwoNumbers("4","8");

function Islogin(username){
    if(username === undefined){
        console.log("Enter your user name");
        return
    }
    return `${username} your are loged in now` 
}
console.log(Islogin());