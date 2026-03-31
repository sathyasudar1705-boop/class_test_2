import React, { useState, useEffect } from "react";
import axios from "axios";
import "./notes.css";

function AddNotes() {
  const [notes, setNotes] = useState([]);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const API_URL = "http://localhost:5001/notes";

  // Fetch notes on mount
  useEffect(() => {
    const fetchNotes = async () => {
      try {
        const res = await axios.get(API_URL);
        setNotes(res.data);
      } catch (err) {
        console.error("Error fetching notes:", err);
      }
    };
    fetchNotes();
  }, []);

  // Add new note
  const handleAddNote = async (e) => {
    e.preventDefault();
    if (!title || !content) return;

    try {
      const res = await axios.post(API_URL, { title, content });

      if (res.status === 201) {
        setNotes([...notes, { _id: res.data.noteId, title, content }]);
        setTitle("");
        setContent("");
      } else {
        alert(res.data.message || "Failed to add note");
      }
    } catch (err) {
      console.error("Error adding note:", err);
    }
  };

  return (
    <div className="container">
      <h1 className="heading">Write your notes here</h1>
      <form className="note-form" onSubmit={handleAddNote}>
        <label className="label">Title</label>
        <input
          className="input"
          type="text"
          name="title"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <label className="label">Content</label>
        <textarea
          className="textarea"
          name="content"
          placeholder="Write your note here..."
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />

        <button className="button" type="submit">Add Note</button>
      </form>

      <h1 className="heading">Notes</h1>
      <div className="notes-list">
        {notes.map((note) => (
          <div className="note-card" key={note._id}>
            <h3 className="note-title">{note.title}</h3>
            <p className="note-content">{note.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AddNotes;