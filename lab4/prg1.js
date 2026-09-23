import express from 'express'

const app=express();

// request goes here
app.get("/",(req,res)=>{
    res.send("<h1>Hello Express</h1>")
})


//always listen at last
app.listen(3333,()=>console.log("server is running at 3333"));