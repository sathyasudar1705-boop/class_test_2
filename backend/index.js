
const express = require('express');
const cors = require("cors"); 
const { MongoClient } = require("mongodb");
const dotenv = require("dotenv");
const http = require("http");

dotenv.config();

const app = express();
const PORT = process.env.PORT || 4000;


const MONGO_URL = process.env.MONGO_URL;
const MONGO_DATABASE = process.env.MONGO_DATABASE || "notes";

const client = new MongoClient(MONGO_URL);
client.connect()
  .catch((err) => console.error("MongoDB connection error:", err));

app.use(express.json());
app.use(cors());


const notesRouter = require("./router/notes.router.js");
app.use("/api/notes", notesRouter);


app.get("/", (req, res) => {
  res.send({ message: "Welcome to Note Management API" });
});

const server = http.createServer(app);
server.listen(PORT, () => console.log(`Server running on port ${PORT}`));

module.exports = { client, MONGO_DATABASE };