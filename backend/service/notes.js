const { MongoClient } = require("mongodb");

const getNotes = async (dbClient, dbName) => {
  return await dbClient.db(dbName).collection("user_notes").find({}).toArray();
};

const createNote = async (dbClient, dbName, title, content) => {
  if (!dbClient) throw new Error("dbClient is undefined");
  const note = { title, content };
  return await dbClient.db(dbName).collection("user_notes").insertOne(note);
};

module.exports = { getNotes, createNote };
