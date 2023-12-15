const  mongoose = require("mongoose")

const todoList = new mongoose.Schema({
    todo:{
        type:String,
        trim:true
    }

});

const todoconnection= new mongoose.model("todoList", todoList);
module.exports = todoconnection;