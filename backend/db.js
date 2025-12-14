const { default: mongoose } = require("mongoose");
require('dotenv').config();

const mongoDbUrl=process.env.MONGODB_URL

mongoose.connect(mongoDbUrl);


const todoSchema=mongoose.Schema({
    title:String,
    description:String,
    completed:Boolean
})

const todo=mongoose.model('todos',todoSchema);

module.exports={
    todo
}