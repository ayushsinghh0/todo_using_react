const express=require("express");
const app=express();
const z=require("zod");
const { createTodo, updateTodo } = require("./types");
const { todo } = require("./db");
const cors=require("cors");

app.use(express.json());
app.use(cors());

app.post("/todo",async function(req,res){
   const createPayLoad=req.body;
   const parsePayLoad=createTodo.safeParse(createPayLoad);

   if(!parsePayLoad.success){
    return res.status(400).json({
        msg:"you send the wrong input"
    })
   }
   await todo.create({
    title:createPayLoad.title,
    description:createPayLoad.description,
    completed:false
   })
   res.json({
    msg:"Todo created"
   })
})


app.get("/todos",async function(req,res){
    const todos=await todo.find({});

    res.json({
        todos
    })

})

app.put("/completed",async function(req,res){
    const updatePayLoad=req.body;
    const safePayLoad=updateTodo.safeParse(updatePayLoad);
    if(!safePayLoad.success){
        return res.status(411).json({
            msg:"invalid input"
        })
    }
    await todo.update({
       _id: updatePayLoad.id 
    },{
        completed: true
    })

    res.json({
        msg:"Todo marked as completed"
    })
})

app.listen(3000);