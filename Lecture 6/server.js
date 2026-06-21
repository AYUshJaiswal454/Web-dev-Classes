const express=require("express");
const app=express();
const port=3000;

const fs=require("fs");
let i=0;


// app.use("/public",express.static("public"));
// app.use("assets",express.static("assets"));


app.use(express.json())



app.use((req,res,next)=>{
    i++;
    let data=`incoming request details=> ${i}, ${req.ip}, ${req.url} timestamp= ${new Date()} \n`;

    fs.appendFileSync("log.txt",data,"utf-8")
    next();
})

app.get("/",(req,res)=>{
    res.send("home page...");
})


app.post("/".at(req,res)=>{
    console.log(req.body);
    
})




app.listen(port,()=>{
    console.log(`server is running at port no ${port}`);
    
})
