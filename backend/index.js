const express=require("express");
const app=express();
const z=require("zod");

app.use(express.json());

app.get("/todo",function(req,res){
    res.json({
        msg:"everything started"
    })
})
app.post("/addtodo",function(req,res){
    res.json({
        msg:""
    })
})

app.put("/completed",function(req,res){
    res.json({
        msg:"todo edited"
    })
})
