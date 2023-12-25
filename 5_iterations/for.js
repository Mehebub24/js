//for


for (let i = 0; i <=  10; i++) {
    if(i==5){
       // console.log(`${i} This the best number`);
    }
    //console.log(i);
}
//this is double for loop
for(let i =1; i<=10 ; i++){
    //console.log(`This is table of ${i}`);
    for(let j =1 ; j<=10; j++){
     //   console.log(i+"*"+j+"="+j*i);
    }
}

//for loop for array 
const a=["jan","feb","mar"];
for (let index = 0; index <a.length; index++) {
    const element =a[index];
   // console.log(element);
}



// break and continue
for (let index = 1; index <=10; index++) {
    if (index==5){
        console.log(`${index} this is 5`);
        break
    }
    console.log(index);
    
}
console.log("this is continune loop going on ");
for (let index = 1; index <=10; index++) {
    if (index==5){
        console.log(`${index} this is 5`);
        continue
    }
    console.log(index);
    
}



















