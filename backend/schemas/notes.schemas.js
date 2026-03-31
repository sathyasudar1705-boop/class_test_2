const joi = require("joi");

const createNoteSchema = joi.object({
    title: joi.string().required(),
    content: joi.string().required(),
});

exports = { createNoteSchema };