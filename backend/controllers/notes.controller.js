const {statusCodes} = require("http-error-codes");
const {client, MONGO_DATABASE} = require("../index.js");
const { createNoteSchema } = require("../schemas/notes.schemas.js");

const createNote = async (request, response) => {
    try {
        const {title, content} = request.body;
        const {error} = createNoteSchema.validate({title, content});
        if (error) {
            return response.status(statusCodes.BAD_REQUEST).send({
                message: error.details[0].message,
            });
        }} 
    catch (error) {
        return response.status(statusCodes.INTERNAL_SERVER_ERROR).send({
            message: "Something went wrong",
        });
    }};

module.exports = { createNote };