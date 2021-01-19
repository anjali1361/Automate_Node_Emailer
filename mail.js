const nodemailer = require('nodemailer');
const mailGun = require('nodemailer-mailgun-transport');
require('dotenv').config()

const auth ={
    auth:{
        api_key:process.env.API_KEY,
        domain:process.env.DOMAIN
    }
};

const transporter = nodemailer.createTransport(mailGun(auth));

const sendMail=(email,subject,text,cb)=>{
    const mailOptions = {
        from:email,
        to:'anjalikumari13617@gmail.com',
        subject,
        text
    };
    
    transporter.sendMail(mailOptions,function(err,data){
       if(err){
            cb(err,null);
        }else{
            cb(null,data);
        }
    });
  
    }

module.exports=sendMail;

//desc+name as text
//subject here is specified by me,i.e. constant
//from
//to
