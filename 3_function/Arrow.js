const user = {
    username:"mehebub",
    price:999,
    welcomMessage:function(useneme){
       console.log(`${this.username}, welcome to website`);
       //console.log(this);
    }
   
}

//console.log(this);
//****************************what is  this *************************** */
 function chai (){
    console.log(this);
 }
 chai()

//*********** arrow function ************/

//this is simple function
// function whatIsyourname(yourname="Mehebub"){
//     console.log(`My name is ${yourname}`);
// }
// whatIsyourname()
// whatIsyourname("toni")

// const WhatIsyourname = (yourname="Mehebub") =>{
//     console.log(`My name is ${yourname}`);   
// }
// WhatIsyourname()
// WhatIsyourname("toni")

// const WhatIsyourname =(yourname="Mehebub") => console.log(`My name is ${yourname}`);
// WhatIsyourname("toni")
// WhatIsyourname()

//for object 
const whatIsyourname = (yourname = "Mehebub") => ({yourname:"what is my name"})
console.log(whatIsyourname());
