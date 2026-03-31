const express = require("express");
const { getNotes } = require("../service/notes.js");
const router = express.Router();

const { createNote } = require("../controllers/notes.controller.js");

router.get("/", async (req, res) => {
  try {
    const notes = await getNotes(req.dbClient, req.dbName);
    res.json(notes);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Failed to fetch notes" });
  }
});

router.post("/", createNote);

module.exports = router;