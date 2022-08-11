const express = require('express');
const bodyparser = require('body-parser');


const mysql = require('mysql2');
const cors = require('cors');
const app = express();
const nodemailer = require('nodemailer');
const { Router } = require('express');

app.use(cors());
app.use(bodyparser.json());

//database connection
const db = mysql.createConnection({
   host:'localhost',
   user:'root',
   password:'',
   database:'church',
   port:3306 
});

//check database connection
db.connect(err=>{
    if(err){
        console.log(err,'dberr');
    }
    console.log('database connected...');
});

//email
app.post('/text-email',(req,res)=>{
    let to = req.body.to;
    console.log(to);
    var transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'mailtoalexbritto099@gmail.com',
        pass: 'uckj blic tqxt snmp'
      }
    });
    var mailOptions = {
      from: 'mailtoalexbritto099@gmail.com',
      to: to,
      subject: 'Sending Email using Node.js',
      text: 'That was easy! pa'
    }
    transporter.sendMail(mailOptions, function(error, info){
      if (error) {
        console.log(error);
      } else {
        console.log('Email sent: ' + info.response);
      }
    });
});

app.post('/mail',(req,res)=>{
    //console.log('get time'); 
    var fromMail = req.body.email;
    var subject = req.body.name;
    var text = req.body.message;
    var to = 'mailtoalexbritto099@gmail.com';
    console.log(fromMail);
    var transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'mailtoalexbritto099@gmail.com',
        pass: 'uckj blic tqxt snmp'
      }
    });

    var mailOptions = {
        from: 'alex@gmail.com',
        to: to,
        subject: subject,
        text: text+fromMail
      }

      transporter.sendMail(mailOptions, function(error, info){
        if (error) {
          console.log(error);
        } else {
          console.log('Email sent: ' + info.response);
        }
      });
    
   /*  db.query(qry,(err,result)=>{
         if(err){
             console.log(err,'errs');
         }
         if(result.length>0){
             res.send({
                 message:`all event details`,
                 data:result
             });
         }
    }); */
 });
/* app.post('/text-email',(req,res)=>{

    const{to,subject,text} =req.body;
    console.log(req.body)
    const mailData={
        from:'mailtoalexbritto099@gmail.com',
        to:to,
        subject:subject,
        text:text,
    };

    var transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: 'mailtoalexbritto099@gmail.com',
          pass: 'uckj blic tqxt snmp'
        }
      });

    transporter.sendMail(mailData,(error,info)=>{
        if(error){
            return console.log(error);
        }
        res.status(200).send({
            message: "mail send",
            message_id: info.messageId
        })
    })
}); */

//get all data
app.get('/time',(req,res)=>{
   //console.log('get time'); 

   let qry = `select * from time`;
   db.query(qry,(err,result)=>{
        if(err){
            console.log(err,'errs');
        }
        if(result.length>0){
            res.send({
                message:`all event details`,
                data:result
            });
        }
   });
});

app.get('/contact',(req,res)=>{
    //console.log('get time'); 
 
    let qry = `select * from address`;
    db.query(qry,(err,result)=>{
         if(err){
             console.log(err,'errs');
         }
         if(result.length>0){
             res.send({
                 message:`all contact details`,
                 data:result
             });
         }
    });
 });

//get single data
app.get('/time/:id',(req,res)=>{

    let gID = req.params.id;
    let qry = `select * from user where id = ${gID}`;

    db.query(qry,(err,result)=>{
         if(err){
             console.log(err,'errs');
         }
         if(result.length>0){
             res.send({
                 message:`all user data`,
                 data:result
             });
         }
         else{
            res.send({
                message:'data not found'
            });
         }
    });
 });

app.listen(3000,()=>{
    console.log('Server Running...');
})