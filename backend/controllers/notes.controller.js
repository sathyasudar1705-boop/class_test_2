const createNote = async (req, res) => {
  try {
    const { title, content } = req.body;


    if (!title || !content) return res.status(400).json({ message: "Title & content required" });


    const { createNote } = require("../service/notes.js");
    const result = await createNote(req.dbClient, req.dbName, title, content);


    return res.status(201).json({
      message: "Note created successfully",
      noteId: result.insertedId,
    });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ message: "Something went wrong" });
  }
};

module.exports = { createNote };