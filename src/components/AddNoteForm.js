import React, { useContext, useState } from "react";
import { NotesContext } from "../context/notes-context";

const AddNoteForm = () => {
  const { dispatch } = useContext(NotesContext);

  const [title, setTitle] = useState("");
  const [noteBody, setNoteBody] = useState("");

  const addNote = (e) => {
    e.preventDefault();
    // setNotes([...notes, { title, noteBody }]);
    dispatch({ type: "ADD_NOTE", note: { title, noteBody } });
    setTitle("");
    setNoteBody("");
  };

  return (
    <form onSubmit={addNote}>
      <input
        type='text'
        value={title}
        placeholder='Note Title'
        onChange={(e) => setTitle(e.target.value)}
      />
      <br />
      <textarea
        value={noteBody}
        onChange={(e) => setNoteBody(e.target.value)}
      ></textarea>
      <br />
      <button>Add Note</button>
    </form>
  );
};

export default AddNoteForm;
