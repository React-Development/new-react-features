import React, { useState } from "react";
import ReactDOM from "react-dom";
import * as serviceWorker from "./serviceWorker";

// A Hook is a function that lets you tap in to a React feature  like state or lifecycle  method.
const App = props => {
  const [count, setCount] = useState(props.count);

  return (
    <div>
      <input
        type="number"
        placeholder="Initial Count Value"
        value={count}
        onChange={e => setCount(parseInt(e.target.value))}
      />

      <p>The current count is: {count}</p>
      <button onClick={() => setCount(count + 1)}>+1</button>
      <button onClick={() => setCount(count - 1)}>-1</button>
      <button onClick={() => setCount(0)}>Reset</button>
    </div>
  );
};

App.defaultProps = {
  count: 0
};

ReactDOM.render(<App />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
