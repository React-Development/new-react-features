import React, { useContext, useEffect } from "react";
import { NotesContext } from "../context/notes-context";

const Note = ({ note }) => {
  const { dispatch } = useContext(NotesContext);

  // This one will be used as ComponentDidUnmount
  useEffect(() => {
    console.log("Setting up effect");
    return () => {
      console.log("Cleaning up effect!");
    };
  }, []);

  return (
    <div>
      <h3>{note.title}</h3>
      <p>{note.noteBody}</p>
      <button
        onClick={() => dispatch({ type: "REMOVE_NOTE", title: note.title })}
      >
        X
      </button>
    </div>
  );
};

export default Note;
