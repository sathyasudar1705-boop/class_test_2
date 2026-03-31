const Joi = require("joi");

const createNoteSchema = Joi.object({
    title: Joi.string().required(),
    content: Joi.string().required(),
});

module.exports = { createNoteSchema };  