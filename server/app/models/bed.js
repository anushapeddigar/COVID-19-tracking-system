'use strict';
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

/**
 * Mongoose schema for bed object.
 */
let BedSchema = new Schema({
        state: {
            type: String
        },
        city: {
            type: String
        },
        hospital : {
            type: String
        },
        pincode: {
            type: String
        },
        totalBeds: {
            type: Number
        },
        availableBeds: {
            type: Number
        }
    },
    {
        versionKey: false
    });

// Duplicate the id field as mongoose returns _id field instead of id.
BedSchema.virtual('id').get(function(){
    return this._id.toHexString();
});

// Ensure virtual fields are serialised.
BedSchema.set('toJSON', {
    virtuals: true
});

module.exports = mongoose.model('bed', BedSchema);