const email ="Mehebubkalapati@gmail.com"
if (email){
    console.log("thak you for loging ");
}else{
    console.log("plase log in");
}
//falsy values 
//false ,0,-0,BinInt On , "" ,null, underfined ,Nan
//truthy values
//"0" , "false" , "", [],{},function(){}

//how to know array is empty
const a=[]
if(a.length ===0){
    console.log("it is empty");
}
//how to know object is empty 
const Obj ={}
if (Object.keys(Obj).length ===0){
    console.log("Object is empty");
}

//Nullish Coalescing Operator (??) : null undefined 
let val1;
// val1 =5?? 10
// val1 = null ??10
// val1 = undefined ?? 15
val1 = null ?? 10 ?? 15
//it will print 10  
console.log(val1);