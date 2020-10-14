import React, { useEffect, useReducer } from "react";

import notesReducer from "../reducers/notes";
import AddNoteForm from "./AddNoteForm";
import NoteList from "./NoteList";
import { NotesContext } from "../context/notes-context";

// A Hook is a function that lets you tap in to a React feature  like state or lifecycle  method.

const NoteApp = () => {
  // const [notes, setNotes] = useState([]);
  const [notes, dispatch] = useReducer(notesReducer, []);

  useEffect(() => {
    const notes = JSON.parse(localStorage.getItem("notes"));
    if (notes) {
      dispatch({ type: "POPULATE_NOTES", notes });
      // setNotes(notesData);
    }
  }, []);

  useEffect(() => {
    // When an update or didMount happens
    localStorage.setItem("notes", JSON.stringify(notes));
  }, [notes]);

  return (
    <NotesContext.Provider value={{ notes, dispatch }}>
      <h1>Notes</h1>
      <NoteList />
      <p>Add Note:</p>
      <AddNoteForm />
    </NotesContext.Provider>
  );
};

export { NoteApp as default };
