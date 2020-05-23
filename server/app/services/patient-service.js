'use strict';
const mongoose = require('mongoose'),
    Patient = mongoose.model('patient');

/**
 * Returns a promise for search results.
 *
 * @param search param.
*/
exports.search = (params) => {
    const promise = Patient.find(params).exec();
    return promise;
};

/**
 * Saves the new patient object.
 *
 * @param patient
*/
exports.save = (patient) => {
    const newPatient = new Patient(patient);
    return newPatient.save();
};


/**
 * Returns the patient object by id.
 *
 * @param patientId
*/
exports.get = (patientId) => {
    const patientPromise = Patient.findById(patientId).exec();
    return patientPromise;
};

/**
 * Updates an existing patient item.
 *
 * @param updatedPatient
*/
exports.update = (updatedPatient) => {
    const promise = Patient.findByIdAndUpdate(updatedPatient.id, updatedPatient).exec();
    return promise;
};

/**
 * Deletes an existing patient.
 *
 * @param patientId
*/
exports.delete = (patientId) => {
    const promise = Patient.findByIdAndRemove(patientId).exec();
    return promise;
};