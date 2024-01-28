const this_is_arry =[1,33,5,5,6,5,5]
//method
//add from last 
this_is_arry.push(6);
//remove from last
this_is_arry.pop()

//add in frist
console.log(this_is_arry.unshift(9));
//remove from frist 
this_is_arry.shift()


console.log(this_is_arry.includes(33));//it gives us answer by true or false if that element is there or not
console.log("this is index",this_is_arry.indexOf(3));//-1 or that index value 

console.log(this_is_arry)

//slie, spliece
console.log("A", this_is_arry);
//slice Returns a copy of a section of an array
const arry =this_is_arry.slice(1,3)

console.log(arry);
console.log("B", this_is_arry);

//it manupulet main array 
const arry2 =this_is_arry.splice(1,3)
console.log(arry2);
console.log("c", this_is_arry);