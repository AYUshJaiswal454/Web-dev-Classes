const express=require("express");
const app=express();

const fs=require("fs");


app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({extended:true}));






app.get('/',(req,res)=>{
    res.send("home route page")
})


app.post("/register",(req,res)=>{
    console.log(req.body);

    // write to append data in file

    fs.appendFileSync("file.txt",JSON.stringify(req.body),"utf-8")
    
    res.send("registration completed...")
    
})

app.listen(3000,()=>{
    console.log("server is running at 3000");
    
});
