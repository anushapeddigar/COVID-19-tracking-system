'use strict';



const patientController = require('./../controllers/patient-controller');

module.exports = (app) => {
    app.route('/patients')
        .get(patientController.list)
        .post(patientController.save);

    app.route('/patients/:id')
        .get(patientController.get)
        .put(patientController.update)
        .delete(patientController.delete);
        
};