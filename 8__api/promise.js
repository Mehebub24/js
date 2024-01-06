/* 
what is promise
A Promise is an OBJECT representing the eventual completion or failure of an asynchronous operation.

where it work 
db request , cryptography, read any file from server 
in mobile dev it work to access speaker camera microphone

A promise is in one of these states
pending 
initail state neither fulfilled no reajected

fulfilled
operation was completed successfully

rejected
the operation failed


fetch('http://...com').then().catch().finally()

*/
/*---------------- Promise Creation -----------------------*/








//1st
const promiseOne = new Promise(function(resolve,reject){
    //Do an anync task
   //DB calls , cryptography, network
    setTimeout(function(){
        console.log("Async task is compelete");
        resolve()
    },1000)
})

promiseOne.then(function(){
    console.log("1st promise consumed");
})

//2nd

new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log("Async 2 task is compelete");
        resolve()
    },1000)
}).then(function(){
    console.log("2nd promise consumed");
})

//3rd
const promiseTwo = new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve({
            username:"Mehebub kalapati",
            email:"mehebubkalapati@gmail.com"
        })
    },1000)
})

promiseTwo.then(function(user){
    console.log(user);
    console.log("3rd promise consumed");
})

//4th
const promisethree = new Promise(function(resolve,reject){
    setTimeout(function(){
    let error = false
    if(!error){
        resolve({username:"Mehebub kalapati", email:"mehebebubkalapati@gamil.com"})
    }else{
        reject("Error Somthing went wrong")
    }
    },1000)
})

promisethree.then((user)=>{
    return user.username
}).then((username)=>{
    console.log(username);
    console.log("4th promise consumed");
}).catch(function(error){
    console.log(error);
}).finally(()=>{
    console.log("The promise is resolved or rejected");
})


//5th
const promisefour = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error = false
        if(!error){
            resolve({username:"Mehebub kalapati", email:"mehebubkalapati@gmail.com"})
        }else{
            reject("ERROR: Somthing Went Wrong in promise no 5th")
        }
    },1000)
})

async function consumPromisesfour(){
    try {
        const response = await promisefour
        console.log(response);
    } catch (error) {
        console.log(error);
    }
}

consumPromisesfour()

async function getAlluser() {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/users")
        const data = await response.json()
        console.log(data);
    } catch (error) {   
        console.log("E:", error);
    }
}
getAlluser()

//this is difrent from other 
fetch("https://jsonplaceholder.typicode.com/users").then((response)=>{
    return response.json()
}).then((data)=>{
   console.log(data);
}).catch((error) =>{
    console.log(error);
})