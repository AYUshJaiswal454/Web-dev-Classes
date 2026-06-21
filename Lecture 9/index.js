const express=require("express");
const app=express();



let student={
   name:"Prince kumar",
   age:29,
   dist:"munger",
   friend:"Jafri"

};

let college="mirai";


app.set("view engine","ejs");




    app.get('/',(req,res)=>{
        res.send("home page..")
    })
    app.get("search",(req,res)=>{
        console.log(req.query);

        res.send("your data founded and rendered")
        
    })



    app.get("/user",(req,res)=>{
        console.log("inside / user route..");
        res.render("user",{student,college});
        
    })

    app.listen(3000,()=>{
        console.log("server is running at port 3000");
        
    })
