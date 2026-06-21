const express=require("express");
const mongoose = require("mongoose");






const app=express();

app.set("view engine","ejs");


mongoose.connect("mongodb://127.0.0.1:27017/hi_tech_student")
.then(() =>console.log("DB Connected"))
.catch(err =>console.log(err));



const studentsSchema=new mongoose.Schema({
  name:"String",
  age:Number,
  courses:"String"
});


const Student=mongoose.model("Student",studentsSchema);
console.log(Student);







// let x=90;
// console.log(x);



app.get("/",async (req,res)=>{

    let allStudent= await Student.find();
    console.log(allStudent);
    

// let obj={
//     "name":"parth",
//     age:20
// };


    // res.send(obj);

    // res.render("students.ejs",{allStudent});
}) 

app.get("/insertdata",(req,res)=>{
    res.render("form.ejs");
})







app.listen(3000,()=>{
        console.log("server is running at port 3000");
        
    })
