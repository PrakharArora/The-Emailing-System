const express = require('express');
const res = require('express/lib/response');
const nodemailer = require('nodemailer')
const app = express();
const path = require('path');
const crd = require('./credn')
const port = 5000


app.get('/' , (req , res ) =>{
res.sendFile(__dirname + '/index.html')
});

app.get('/send' , (req , res) =>{
//fetching data
let email1 = req.query.email1;
let email2 = req.query.email2;
let subject = req.query.subject;
let message = req.query.message;

const mail = nodemailer.createTransport({

  host:'smtp.gmail.com',
  port: 587,
  secure: false,
  auth: { user:crd.user,
          pass:crd.pass 
        }
});

mail.sendMail({

  from:'aditi30988@gmail.com',
  to:[email1 ,email2],
  subject: subject,
  html: message
},(err)=>{

  if(err) throw err,
  res.send('Mail has been send')
})

}); 
app.listen(port , (err) => {

  if(err)

  throw err;

  console.log('Server is running at port %d' , port)

});

