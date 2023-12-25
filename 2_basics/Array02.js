const collage_friends = ['Sovik','Debarun','Rishi','Syan']
const school_friends =['Tanmoy','Rik','Arunavo','Pritam']

// collage_friends.push(school_friends);
// console.log(collage_friends);

// console.log("This is",collage_friends[4][2]);

//it gives us new array 
// const frinends =collage_friends.concat(school_friends)
// console.log(frinends);

//this is spread operator
const all_frindes =[...collage_friends,...school_friends]
console.log(all_frindes);

const Number_array= [13,46,95,89,7,79,[94,[49]]]

console.log(Number_array);
let all_number = Number_array.flat(Infinity);
console.log(all_number);

console.log(Array.isArray("Mehebub"));
//converting to array
console.log(Array.from("Mehebub"));
console.log(Array.from({
    name:'Mehebub'
}));

let score1 = 12
let score2 = 92
let score3 = 98

console.log(Array.of(score1,score2,score3));