import React, { useState, useEffect, useReducer } from "react";
import ReactDOM from "react-dom";
import * as serviceWorker from "./serviceWorker";

// A Hook is a function that lets you tap in to a React feature  like state or lifecycle  method.

// Reducer function is similar to the ones used on Redux

const notesReducer = (state, action) => {
  switch (action.type) {
    case "POPULATE_NOTES":
      return action.notes;
    case "ADD_NOTE":
      return [...state, action.note];
    case "REMOVE_NOTE":
      return state.filter(({ title }) => title !== action.title);
    default:
      return state;
  }
};

const NoteApp = () => {
  // const [notes, setNotes] = useState([]);
  const [notes, notesDispatch] = useReducer(notesReducer, []);
  const [title, setTitle] = useState("");
  const [noteBody, setNoteBody] = useState("");

  const addNote = e => {
    e.preventDefault();
    // setNotes([...notes, { title, noteBody }]);
    notesDispatch({ type: "ADD_NOTE", note: { title, noteBody } });
    setTitle("");
    setNoteBody("");
  };

  const removeNote = title => {
    // setNotes(notes.filter(note => note.title !== title));
    notesDispatch({ type: "REMOVE_NOTE", title });
  };

  useEffect(() => {
    const notes = JSON.parse(localStorage.getItem("notes"));
    if (notes) {
      notesDispatch({ type: "POPULATE_NOTES", notes });
      // setNotes(notesData);
    }
  }, []);

  useEffect(() => {
    // When an update or didMount happens
    localStorage.setItem("notes", JSON.stringify(notes));
  }, [notes]);

  return (
    <div>
      <h1>Notes</h1>
      {notes.map(note => (
        <Note key={note.title} note={note} removeNote={removeNote} />
      ))}
      <p>Add Note:</p>
      <form onSubmit={addNote}>
        <input
          type="text"
          value={title}
          placeholder="Note Title"
          onChange={e => setTitle(e.target.value)}
        />
        <br />
        <textarea
          value={noteBody}
          onChange={e => setNoteBody(e.target.value)}
        ></textarea>
        <br />
        <button>Add Note</button>
      </form>
    </div>
  );
};

const Note = ({ note, removeNote }) => {
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
      <button onClick={() => removeNote(note.title)}>X</button>
    </div>
  );
};

/*const App = props => {
  const [count, setCount] = useState(props.count);
  const [text, setText] = useState("");


  // This would be exactly as a componentDidMount
    useEffect(() => {
        console.log('This should only run once');
        
    },[]); // <- If the array is not set up, it will run anytime the text or count changes. If it's set up empty it will just run once when the component first once mounts but it won't run again because it depends on nothing. It means nothing is triggering this useEffect. Mostly used to fetch or read data.

  // DidMount DidUpdate
  // This would be exactly as a ComponentDidUpdate
  useEffect(() => {
    console.log("useEffect ran");
    document.title = count;
  }, [count]); // Here you set up specifically when the useEffect will be triggered. In this case is when count changes.

  return (
    <div>
      <input
        type="number"
        placeholder="Initial Count Value"
        value={count}
        onChange={e => setCount(parseInt(e.target.value))}
      />

      <p>
        The current {text || "count"} is: {count}
      </p>
      <button onClick={() => setCount(count + 1)}>+1</button>
      <button onClick={() => setCount(count - 1)}>-1</button>
      <button onClick={() => setCount(props.count)}>Reset</button>
      <input type="text" value={text} onChange={e => setText(e.target.value)} />
    </div>
  );
};

App.defaultProps = {
  count: 0
};

*/

ReactDOM.render(<NoteApp />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
