import React, { useState } from "react";
import ReactDOM from "react-dom";
import * as serviceWorker from "./serviceWorker";

// A Hook is a function that lets you tap in to a React feature  like state or lifecycle  method.

//

const NoteApp = () => {
  const [notes, setNotes] = useState([]);
  const [title, setTitle] = useState("");
  const [noteBody, setNoteBody] = useState("");

  const addNote = e => {
    e.preventDefault();
    setNotes([...notes, { title, noteBody }]);
    setTitle("");
    setNoteBody("");
  };

  const removeNote = title => {
    setNotes(notes.filter(note => note.title !== title));
  };

  return (
    <div>
      <h1>Notes</h1>
      {notes.map(note => (
        <div key={note.title}>
          <h3>{note.title}</h3>
          <p>{note.noteBody}</p>
          <button onClick={() => removeNote(note.title)}>X</button>
        </div>
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

// const App = props => {
//   const [count, setCount] = useState(props.count);
//   const [text, setText] = useState("");

//   return (
//     <div>
//       <input
//         type="number"
//         placeholder="Initial Count Value"
//         value={count}
//         onChange={e => setCount(parseInt(e.target.value))}
//       />

//       <p>
//         The current {text || "count"} is: {count}
//       </p>
//       <button onClick={() => setCount(count + 1)}>+1</button>
//       <button onClick={() => setCount(count - 1)}>-1</button>
//       <button onClick={() => setCount(props.count)}>Reset</button>
//           <input type="text" value={text} onChange={(e) => setText(e.target.value)} />
//     </div>
//   );
// };

// App.defaultProps = {
//   count: 0
// };

ReactDOM.render(<NoteApp />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
