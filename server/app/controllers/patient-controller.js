'use strict';

const patientService = require('./../services/patient-service');

/**
 * Sets response for patient search.
 *
 * @param request
 * @param response
*/
exports.list = (request, response) => {
    const params = request.query;
    const promise = patientService.search(params);
    const result = (patients) => {
        response.status(200);
        response.json(patients);
    };
    promise
        .then(result)
        .catch(renderErrorResponse(response));
};

/**
 * Creates a new patient and sets the response.
 *
 * @param request
 * @param response
*/
exports.save = (request, response) => {
    const patient = Object.assign({}, request.body);
    const result = (savedPatient) => {
        response.status(201);
        response.json(savedPatient);
    };
    const promise = patientService.save(patient);
    promise
        .then(result)
        .catch(renderErrorResponse(response));
};


/**
 * Throws error if error object is present.
 *
 * @param {Response} response The response object
 * @return {Function} The error handler function.
 */
let renderErrorResponse = (response) => {
    const errorCallback = (error) => {
        if (error) {
            response.status(500);
            response.json({
                message: error.message
            });
        }
    };
    return errorCallback;
};


/**
 * Returns patient response.
 *
 * @param request
 * @param response
*/
exports.get = (request, response) => {
    const patientId = request.params.id;
    const result = (patient) => {
        response.status(200);
        response.json(patient);
    };
    const promise = patientService.get(patientId);
    promise
        .then(result)
        .catch(renderErrorResponse(response));
};

/**
 * Updates the patient resource.
 *
 * @param request
 * @param response
*/
exports.update = (request, response) => {
    const patientId = request.params.id;
    const updatedPatient = Object.assign({}, request.body);
    
   // updatedPatient.modifiedDate = new Date();
    //console.log(updatedPatient);
    updatedPatient.id = patientId;
    const result = (patient) => {
        response.status(200);
        response.json(patient);
    };
    const promise = patientService.update(updatedPatient);
    promise
        .then(result)
        .catch(renderErrorResponse(response));
};

/**
 * Deletes an patient resource.
 *
 * @param request
 * @param response
*/
exports.delete = (request, response) => {
    const patientId = request.params.id;
    const result = () => {
        response.status(200);
        response.json({
            message: "Successfully Deleted."
        });
    };
    const promise = patientService.delete(patientId);
    promise
        .then(result)
        .catch(renderErrorResponse(response));
};