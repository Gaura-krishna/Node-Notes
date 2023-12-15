// const data = require('./login');
// const color= require('cli-color')

// let username=color.red('krish')

// data.login(username);
// color.

// const path = require('path')
// console.log("extisene name",path.extname('node.js'))
// console.log("dirtname",path.dirname(__filename))
// console.log("basename",path.basename(__filename))
// console.log("parsename",path.parse(__filename))
// console.log("join",path.join(__dirname,'name','sample.js'))

//file system


//making floder
// const fsd = require('fs')
// fsd.mkdir(path.join(__dirname, 'File'), (err) => {
//     if (err) {
//         console.log("err", err)
//     }
//     console.log('file is created')
// })

//making file

// fsd.writeFile(path.join(__dirname,'File',"sample.txt"),'hell',(err)=>{
//     if(err){
//         console.log("err",err)
//     }
//     console.log('file is created')
// })

// fsd.appendFile(path.join(__dirname,'File',"sample.txt"),' world',(err)=>{
//     if(err){
//         console.log("err",err)
//     }
//     console.log('file is created')
// })

//readind the data or getting data

// fsd.readFile(path.join(__dirname,"File","sample.txt"),'utf-8',(err,data)=>{
//  console.log(data)
// })


//Os module

// const os=require('os')
//  console.log(os.type())
//  console.log(os.freemem())
//  console.log(os.arch())

// clacilator
const path=require('path')

const fs=require('fs')

fs.mkdir(path.join(__dirname,'assign',),(err)=>{
    if(err){
        console.log(err)
    }
    console.log('file created')
})


fs.writeFile(path.join(__dirname,'assign',"sample.js"),'hell',(err)=>{
    if(err){
        console.log("err",err)
    }
    console.log('file is created')
})


