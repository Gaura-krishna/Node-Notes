

//http module
const http=require('http')


// const app= http.createServer((req,res)=>{
//         res.end('hello')
        
// }).listen(3002,()=>{ console.log('listening to port')})

// app.listen(3002,()=>{
//     console.log('port')
// })



//reading html page by using sever

const fs=require('fs')
const path= require('path')

const app= http.createServer((req,res)=>{
   
   fs.readFile(path.join(__dirname,'pages',"index.html"),(err,data)=>{

    res.end(data)

    
   })
})

// app.listen(3002,()=>{
// console.log('port')
// })
