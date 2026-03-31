const { MongoClient } = require("mongodb");
const { client, MONGO_DATABASE } = require("../index.js");

const getNotes = async () => {
    return await client
    .db(MONGO_DATABASE)
    .collection("user_notes")
    .find({})
    .toArray();
};

const createNote = async (title, content) => {
    const note = {
        title,
        content,
    };
    const result = await client
    .db(MONGO_DATABASE) 
    .collection("user_notes")
    .insertOne(note);
    return result;
};

module.exports = { getNotes, createNote };