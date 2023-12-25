"use strict";//treat all js program as newer version

//alert() we are using vs code not browser 

let age = "51"
let BigInt= " this not"
let name = "Mehebub"
let state;

{/*

thsi all are primetiv 
Number --> 2 to the power 
bigint
string --> ""
boolean --> true / false
null --> standalone value it is a object 
undefined -->
Symbol

*/}


//both are defirent 
 let  id = Symbol("123")
 let anodtherid = Symbol("123")

//object this is non-primetive data type also add array 

let obj ={
    age:6,
    name:"Mehebub"
}
console.log(typeof age)// this is how we can see what is datatype of that varable 
console.log(typeof BigInt)

//conversion 
console.log(Boolean (age))
console.log(Number (BigInt))// this will not give return NaN

