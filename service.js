const express = require('express');
const sendMail=require('./mail.js');

const log=console.log;
const app = express();
const path = require('path');//path is a built in module

const PORT =8080;

//Data parsing i.e. getting data from html form to send email,using middleware
app.use(express.urlencoded({
    extended:false
}));
app.use(express.json());

//email,subject,text
app.post('/email',(req,res)=>{
    //send  email here
    const { subject,email,text}=req.body;
    console.log('Data: ',req.body);

    sendMail(email,subject,text,function(err,data){
        if(err){
            res.status(500).json({message:'Internal error'});
        }else{
            res.json({message:'Email sent!!!'})
        }
    });
    res.json({message:"Message received"})
});


app.get('/',(req,res) =>{
    res.sendFile(path.join(__dirname,'','index.html'));//to sedn html file to server for displaying it on frontend
});
// app.get('/favicon.ico',(req,res) =>{
//     res.status(204);//to send html file to server for displaying it on frontend
// });

app.listen(PORT,function () {
        return log("Server is starting at port, ", 8080);
    });