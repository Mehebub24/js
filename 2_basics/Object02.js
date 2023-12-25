//singleton 
const tinderUser = new Object()
// nonsingleton
// const tinderUser = {}
tinderUser.id = 878
tinderUser.name = "Mehebub kalapati"
tinderUser.isloggedin = true

//console.log(tinderUser);

const regulerUser ={
    email:"mehebubkalapati@gmail.com",
    fullname: {
        userfullname:{
            firstName:"Mehebub",
            lastName:"Kalapati"
        }
        } 
}
//console.log(regulerUser.fullname.userfullname);

/*how to marge object */
const object1 = {
    1:"a",
    2:"b"
}
const object2 = {
    3:"c",
    4:"d"
}
//const object3 = Object.assign({/*this is target */},object1,object2)
const object3 ={...object1,...object2} 

console.log(object3);

const ueser =[
    {
        id: 45,
        email:"mehebubkalapati@gmail.com"
    }, 
    {
        id: 51,
        email:"jasminmondol@gmail.com"
    }
]
//console.log(ueser[1].email);
//all key of that Object as array 
console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));

//is there that property
const check = tinderUser.hasOwnProperty("id")

if (check == true){
    console.log(tinderUser.id);
}else{
    console.log("hi hello ");
}