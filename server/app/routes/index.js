'use strict';



const bedRoute = require('./../routes/bed-route');
const patientRoute = require('./../routes/patient-route');
const userRoute = require('./../routes/user-route');

module.exports = (app) => {
    userRoute(app);
    bedRoute(app);
    patientRoute(app);
    
};

