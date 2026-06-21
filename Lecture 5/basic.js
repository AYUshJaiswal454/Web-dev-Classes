const { log } = require("node:console");

let student={
    name: "Vikas Patel",
    age: 60,
    address: "Allahabad"

};

console.log(typeof(student));
student=JSON.stringify(student);
console.log(typeof(student));


// student=student.parse

