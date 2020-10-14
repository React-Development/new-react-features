import React from "react";
import ReactDOM from "react-dom";
import * as serviceWorker from "./serviceWorker";

import NoteApp from "./components/NoteApp";

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
