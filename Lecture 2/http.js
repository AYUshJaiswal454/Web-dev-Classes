const http=require("http");


let server=http.createServer((req,res)=>{
    console.log("hi inside server..computer ");

    res.end("facebook page sent") ;

    
});

server.listen(3000)