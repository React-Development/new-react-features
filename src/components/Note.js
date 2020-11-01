import React, { useContext, useEffect, useState } from "react";
import { NotesContext } from "../context/notes-context";
import useMousePosition from "../hooks/useMousePosition";

const Note = ({ note }) => {
  const { dispatch } = useContext(NotesContext);
  const position = useMousePosition();

  // Setup state to track x and y position (useState)
  // Setup event to listen for mouse movementent
  // Remove event listener if unmounted (useEffect)

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
      <p>
        {position.x}, {position.y}
      </p>
      <button
        onClick={() => dispatch({ type: "REMOVE_NOTE", title: note.title })}
      >
        X
      </button>
    </div>
  );
};

export default Note;
