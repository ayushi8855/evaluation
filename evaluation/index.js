const express = require("express")


const app=express()

app.use(logger)
app.use(checkPermission)
app.get("/books",logger,(req,res)=>{
    return res.send({route:"/books"})
})

app.get("/libraries",logger,checkPermission,(req,res)=>{
return res.send({route:"/libraries",permission:true})
})

app.get("/authors",logger,checkPermission,(req,res)=>{
    res.send({route:"/authors",permission:true})
})

function logger(req,res,next){
    console.log("books")
    next()
}
 function checkPermission(req,res,next){
     console.log("checkpermission")
     next()
 }
 app.listen(7000,()=>{
    console.log("this was shown in the live class")
});