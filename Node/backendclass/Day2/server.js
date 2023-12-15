//connecting to server with express
const express = require('express');
const mongoose=require('mongoose');
const todoconnection = require("./models/todocollection.js")
const app=express()
app.use(express.json);



// const DB_URL=`mongodb+srv://gaurakrishna31:krishgaura31@cluster0.e0lrywg.mongodb.net/?retryWrites=true&w=majority`
// mongoose.connect(DB_URL).then((db, err)=>{
//     if(err) throw err;
//     else{
//         console.log("DB is connected")
//     }
// })

// app.get("/", async(req,res)=>{
//     const todos = await todoconnection.find({});
//     res.send(todos)
// })

// app.post("/addTodo", async (req,res)=>{
//     try{
//         await todoconnection.create(req.body);
//         res.send("data is posted");
//     }
//     catch(e){
//         console.log(e)
//     }
// })
// app.patch("/updateTodo/:id", async (req,res)=>{
//     try{
//         await todoconnection.findByIdAndUpdate(req.params.id,req.body);
//         res.send("data is posted");
//     }
//     catch(e){
//         console.log(e)
//     }
// })

// app.delete("/delete/:id", async (req,res)=>{
//     try{
//         await todoconnection.fidnIdAndDelete(req.params.id,req.body);
//         res.send("data is deleted");
//     }
//     catch(e){
//         console.log(e)
//     }
// })

//----------------------------------------------------------------------------------------------------------------------------
//Day3

const reqfilter=(req,res,next)=>{
    const checkAuth= req.query.username;
    const checkpass = req.query.password;
    const passvalid=/[A-Za-z]/;
    if(checkAuth!== "innomatics"){
        res.send("not a valid password")
    }else if(passvalid.test(checkpass)){
        res.send("not a valid password")
    }else{
        next();
    }

}

app.use(reqfilter)


app.get("/", (req, res , next)=>{
    console.log("home")
    res.send("home page")
    next()
},
(req,res,next)=>{
    console.log("second middleware")
    next()
},
(req,res,next)=>{
    console.log("third middleware")
    next()
},
(req,res,next)=>{
    console.log("fourth middleware")
 next()
}


)



app.get("/user", (req, res)=>{
    res.send("user page")
})


app.listen(8080)
//kill the port cmd- npx kill-port 8080
  
