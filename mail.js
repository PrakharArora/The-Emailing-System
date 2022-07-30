const nodemailer = require('nodemailer');
const mailGun = require('nodemailer-mailgun-transport');

const auth ={

    auth: {

        api_key: '317f12af96f0442f9c28c3dfdc74ff61-8d821f0c-a64b1bf0',
        domain: 'sandbox7d3697c6a9a94aa7bbdfac6bd6d5c9bc.mailgun.org'
    }
};

const transporter = nodemailer.createTransport(mailGun(auth));

const mailOptions = {

    from: 'itsshiv777@gmail.com',
    to: 'hellohacker178@gmail.com',
    subject: 'Testing',
    text: 'I would like to get in touch with you'
};

transporter.sendMail(mailOptions,  function(err, data){

    if(err){

        console.log('Error Orrcurs');

    }else{
        console.log('Message sent!!!')
    }

})