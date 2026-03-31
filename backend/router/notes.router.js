const express = require("express");
const { createNote } = require("../controllers/notes.controller.js");

const router = express.Router();

router.post("/", createNote);

module.exports = router;