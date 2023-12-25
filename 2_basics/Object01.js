
//This is Object literals 

const mySym = Symbol("key1")
const my_object ={
    //all keyes are defult string      
    name:"Mehebub",
    [mySym] : "mykey1",
    "Full name" : "Mehebub kalapati",
    emeil:"mehebubkalapati@gmail.com",
    addres:"shimurali"
}
console.log(my_object.name);
console.log(my_object["Full name"]);
console.log(mySym[mySym]);

//
my_object.emeil = "Mehebubkalapati@google.com"
//
//Object.freeze(my_object);

// my_object.emeil = "Mehebubkalapati@melotion.com"
// console.log(my_object);


//function use as vareable 
my_object.greeting = function(){
    console.log("This is my name");
}


my_object.greeting2 = function(){
    console.log("what is my name");
}

console.log(my_object.greeting2());

