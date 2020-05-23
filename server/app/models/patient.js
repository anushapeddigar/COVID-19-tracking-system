'use strict';
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

/**
 * Mongoose schema for patient object.
 */
let PatientSchema = new Schema({
    firstName: {
        type: String
    },
    lastName: {
        type: String
    },
    address: {
        type: String
    },
    city: {
        type: String
    },
    zipcode: {
        type: Number
    },dob: {
        type: String
    },
    mobile: {
        type: Number
    },
    email: {
        type: String
    },
    associatedBed: {
        type: String
    }
},
{
    versionKey: false
});
// Duplicate the id field as mongoose returns _id field instead of id.
PatientSchema.virtual('id').get(function(){
    return this._id.toHexString();
});

// Ensure virtual fields are serialised.
PatientSchema.set('toJSON', {
    virtuals: true
});

module.exports = mongoose.model('patient', PatientSchema);