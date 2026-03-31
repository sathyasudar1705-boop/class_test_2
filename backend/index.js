require('dotenv').config(); 
const express = require("express");
const { MongoClient } = require("mongodb");
const notesRouter = require("./router/notes.router.js");

const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 5000;
const MONGO_URL = process.env.MONGO_URL;
const MONGO_DATABASE = process.env.MONGO_DATABASE;

const client = new MongoClient(MONGO_URL);

async function startServer() {
  try {
    await client.connect();
    console.log("MongoDB connected");

   
    app.use("/notes", (req, res, next) => {
      req.dbClient = client;
      req.dbName = MONGO_DATABASE;
      next();
    }, notesRouter);

    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
  } catch (err) {
    console.error(err);
  }
}

startServer();