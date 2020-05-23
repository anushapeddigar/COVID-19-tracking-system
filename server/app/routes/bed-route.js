'use strict';
const bedController = require('./../controllers/bed-controller');
const nodemailer = require('nodemailer');
module.exports = (app) => {
    app.route('/beds')
        .get(bedController.list)
        .post(bedController.save);

    app.route('/beds/:id')
        .get(bedController.get)
        .put(bedController.update)
        .delete(bedController.delete);
        
    app.route('/sendbed').post((req, res) => {
            //console.log(req.body.role);
            const outputData = `
            <p>Hello ${req.body.name} <p>
            <p>You have been tested positive and have been assigned a bed. The details are below. If this is not you choose to ignore!</p>
            <ul>  
              <li>Name: ${req.body.name}</li>
              <li>Email: ${req.body.email}</li>
              <li>Hospital: ${req.body.hospital}</li>
            </ul>`;
          
            let transporter2 = nodemailer.createTransport({
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
            let HelperOptions2 = {
                from: '"Abhinav Nagaraj" angularcovid19@gmail.com', // sender address
                to: [`${req.body.email}`],// list of receivers
                subject: 'URGENT', // Subject line
                text: 'Hello ! You have registeres as ', // plain text body
                html: outputData // html body
            };

            transporter2.sendMail(HelperOptions2, (error, info) => {
                if (error) {
                    return console.log(error);
                }
                console.log("The message was sent!");
                console.log(info);
            });
});
}