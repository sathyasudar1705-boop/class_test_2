import React from "react";


function AddNotes() {
  return (
    <div>
      <h1>Write your notes here</h1>
      <form>
        <h2>Title</h2>
        <br />
        <input type="text" placeholder="Title" />
        <br />
        <h2>Content</h2>
        <br />
        <textarea placeholder="Write your note here..."></textarea>
        <br />
        <button type="submit" onClick={Notes}>Add Note</button>
      </form>



    </div>
  );
}


function Notes() {
  return (
    <div>
      <h1>Notes</h1>
    </div>
  );
}

export default AddNotes;
