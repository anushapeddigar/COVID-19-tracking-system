'use strict';
const mongoose = require('mongoose');
const Bed = mongoose.model('bed');

/**
 * Returns a promise for search results.
 *
 * @param search param.
 */
exports.search = (params) => {
    const promise = Bed.find(params).exec();
    return promise;
};

/**
 * Saves the new Bed object.
 *
 * @param bed
 */
exports.save = (bed) => {
    const newBed = new Bed(bed);
    return newBed.save();
};

/**
 * Returns the bed object by id.
 *
 * @param bedId
 */
exports.get = (bedId) => {
    const bedPromise = Bed.findById(bedId).exec();
    return bedPromise;
};

/**
 * Updates an existing hospital bed information.
 *
 * @param updatedBedInfo
 */
exports.update = (updatedBedInfo) => {
    const promise = Bed.findByIdAndUpdate(updatedBedInfo.id, updatedBedInfo, {new: true}).exec();
    return promise;
};

/**
 * Deletes an existing hospital info.
 *
 * @param hospitalId
 */
exports.delete = (hospitalId) => {
    const promise = Bed.findByIdAndRemove(hospitalId).exec();
    return promise;
};