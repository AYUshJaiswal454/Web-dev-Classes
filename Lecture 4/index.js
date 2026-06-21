let express=require("express");
// console.log(express);

let app=express();
// console.log(x);


app.get("/",(req,res)=>{
    console.log("client is logging");
    res.send("client ko bej diya")
    

})


app.get("/payment",(req,res)=>{
    console.log("serverside rendening");
    res.send("payment .")
    
})

app.listen(port,()=>{
    console.log(`server is starting at port ${port}`);
});
