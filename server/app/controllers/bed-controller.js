'use strict';

const bedService = require('./../services/bed-service');

/**
 * Sets response for bed search.
 *
 * @param request
 * @param response
 */
exports.list = (request, response) => {
    const params = request.query;
    const promise = bedService.search(params);
    const result = (beds) => {
        response.status(200);
        response.json(beds);
    };
    promise
        .then(result)
        .catch(renderErrorResponse(response));
}

/**
 * Creates a new bed order and sets the response.
 *
 * @param request
 * @param response
 */
exports.save = (request, response) => {
    const bed = Object.assign({}, request.body);
    const result = (savedBed) => {
        response.status(201);
        response.json(savedBed);
    };
    const promise = bedService.save(bed);
    promise
        .then(result)
        .catch(renderErrorResponse(response));
};

/**
 * Returns bed response.
 *
 * @param request
 * @param response
 */
exports.get = (request, response) => {
    const bedId = request.params.id;
    const result = (bed) => {
        response.status(200);
        response.json(bed);
    };
    const promise = bedService.get(bedId);
    promise
        .then(result)
        .catch(renderErrorResponse(response));
};

/**
 * Updates the bed resource.
 *
 * @param request
 * @param response
 */
exports.update = (request, response) => {
    const bedId = request.params.id;
    const updatedBedInfo = Object.assign({}, request.body);
    updatedBedInfo.id = bedId;
    const result = (bed) => {
        response.status(200);
        response.json(bed);
    };
    const promise = bedService.update(updatedBedInfo);
    promise
        .then(result)
        .catch(renderErrorResponse(response));
};

/**
 * Deletes a hospital
 *
 * @param request
 * @param response
 */
exports.delete = (request, response) => {
    const hospitalId = request.params.id;
    const result = () => {
        response.status(200);
        response.json({
            message: "Successfully Deleted."
        });
    };
    const promise = bedService.delete(hospitalId);
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