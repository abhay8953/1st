// const fs=require('fs');
// fs.writeFileSync("heloo.txt","Hii there");
// console.log(__dirname);//directory name

//const http=require('http')

const express =require('express');
const app =express();
var port=process.env.PORT||3000
app.get('/',(req,res)=>res.send(
 "hello!!"
));
app.listen(port,()=>console.log('server is running on '+port))
