const express=require("express");
const app=express();





app.get("/",(req,res)=>{
    console.log(req.url);
    console.log(req.ip);
    res.send("home page...")
    
    
})