const express=require("express");
const app=express();




app.set("view engine","ejs");


let prince={
   name:"prince",
   age:29,
   dist:"munger"

};




    app.get('/',(req,res)=>{
        res.send("home page..")
    })


    app.get("/user",(req,res)=>{
        res.render("user",{prince});
    })
    
    
    
    
   

app.listen(3000,()=>{
    console.log(`server is starting at port 3000`);
});
