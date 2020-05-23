'use strict';
//var express = require('express');
//var router = express.Router();
const jwt = require('express-jwt');
const nodemailer = require('nodemailer');
const auth = jwt({
    secret: 'MY_SECRET',
    userProperty: 'payload'
});


const ctrlProfile = require('../controllers/profile');
const ctrlAuth = require('../controllers/authentication');


// profile
module.exports = (app) => {
    app.route('/profile').get( auth, ctrlProfile.profileRead);

// authentication
    app.route('/register').post(ctrlAuth.register);
    app.route('/login').post(ctrlAuth.login);



    app.route('/sendreg').post((req, res) => {
        console.log(req.body.role);
        const outputData = `
        <p> Hello ${req.body.name} <p>
        <p>You have successfully registered for covid19-pandemic updates app! Please verify you details.</p>
        <ul>  
          <li>Name: ${req.body.name}</li>
          <li>Email: ${req.body.email}</li>
          <li>Role: ${req.body.role}</li>
        </ul>`;
      
        let transporter1 = nodemailer.createTransport({
            host: 'smtp.gmail.com',
            service:'Gmail',
            port: 587,
            secure: false,
            auth: {
                user: 'angularcovid19@gmail.com', // generated ethereal user
                pass: 'sassy_1995'  // generated ethereal password
            },
            tls: {
                rejectUnauthorized: false
            }
        })

            let HelperOptions1 = {
                from: '"Abhinav Nagaraj" angularcovid19@gmail.com', // sender address
                to: [`${req.body.email}`],// list of receivers
                subject: 'Successfully Registered!', // Subject line
                text: 'Hello ! You have registered as ', // plain text body
                html: outputData // html body
            };
          
            transporter1.sendMail(HelperOptions1, (error, info) => {
                if (error) {
                    return console.log(error);
                }
                console.log("The message was sent!");
                console.log(info);
            });
        });
}

