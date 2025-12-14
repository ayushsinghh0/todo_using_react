const express=require("express");
const app=express();
const z=require("zod");
const { createTodo, updateTodo } = require("./types");

app.use(express.json());

app.get("/todo",function(req,res){
   const createPayLoad=req.body;
   const parsePayLoad=createTodo.safeParse(createPayLoad)

   if(!parsePayLoad.success){
    res.status(411).json({
        msg:"you send the wrong input"
    })
   }
})
app.post("/addtodo",function(req,res){
    res.json({
        msg:""
    })
})

app.put("/completed",function(req,res){
    const updatePayLoad=req.body;
    const safePayLoad=updateTodo.safeParse(updatePayLoad);
    if(!safePayLoad.success){
        res.status(411).json({
            msg:"invalid input"
        })
    }
})
