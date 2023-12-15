// for install nodejs cmd- npm init (without any package manually type version in cmd )
//for installing nodejs with badsic template the cmd- npm i init -y


//how to import files in nodesjs
// require is used to import files in nodejs
const cal = require('./Module/samplemodule.js')
const color = require('cli-color')


console.log(cal.add(2,3))
console.log(color.red('this is red'))


//this are pre-defined variables
console.log(__dirname)
console.log(__filename)




//pre-define module 
// path: this used to to file path
const path = require('path')



//example - getting file extention name
// const sample = path.extname(__filename)
// console.log(sample)


//example- getting only name of filename instead of file path 
// const basename = path.basename(__filename)
// console.log(basename)

//example- parse is used to get all details of files such as dirname,root,basename,extname,name
// const par = path.parse(__filename)
// console.log(par) 





//how to deal with files creating file and reading file




// fs is module which is used to handle file
const fs = require('fs');

//note:- while dealing with files in nodejs  we have give error part so if file task cant be executed then throw error

//Creating a folder
fs.mkdir(path.join( __dirname ,'/FSD'),(err)=>{
    if(err){
        console.log(err)
    }
})


//creating a file in FSD folder
//note:- while creating file we have to write filename with extention".txt,.html.css "  and file should contain some work

fs.writeFile(path.join( __dirname ,'/FSD','new.txt'),'hello to world',(err)=>{
    if(err){
        console.log(err)
    }
})


//Updating the existing file
//upadating can be done by using appendFile keyword
fs.appendFile(path.join( __dirname ,'/FSD','new.txt'),' this is krishna ',(err)=>{
    if(err){
        console.log(err)
    }
})


//Reading the existing file
//while reading the file with filename, but we also use utf-8:-'utf-8 is used to convert binary code human readable language' and data and error

// fs.readFile(path.join( __dirname ,'/FSD','new.txt'),'utf-8',(err,data)=>{
//     if(err){
//         console.log(err)
//     }
//     else{
//         console.log(data)
//     }
// })


//os handle
// const os = require('os')
// console.log(os.type())
// console.log(os.freemem())
// console.log(os.arch())


//events module
// const emitter = require('events')

//whlie use emitter we have write this way
//variable can any name

// const evt = new emitter()

// evt.on('login',(data)=>{
//     console.log(data)
// })
// evt.on('login',()=>{
//     console.log("listing to login")
// })

// evt.emit('login',{
//     user:"name",
//     password:"hashpassword"
// })



