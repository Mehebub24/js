const { INTERNALS } = require("next/dist/server/web/spec-extension/request");

//const student = new Object {}
const student = {};
student.id =54  
student.name='mehebub'   

const student1 ={};
student1.id =87
student1.name= 'kalapati'              

const all_class = Object.assign({},student1,student)
console.log(student);
console.log(all_class);

const corse ={
    corseName:"jee prep by AI",
    corsePrice:"999",
    corseInstructor:"AI"
}
const {corseInstructor : Instructor} = corse
console.log(Instructor);