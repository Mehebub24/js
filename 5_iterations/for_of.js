//for of 
// ["",""]
// [{},{},{}]

const arr =[1,2,3,5,4,8]
for (const num of arr) {
    console.log(num);
}

const greetings ="Hello World!"
for (const greet of greetings){
    if (greet == " "){
        continue
    }
    console.log("This is greeting ",greet);
}