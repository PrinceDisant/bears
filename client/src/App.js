import React, { useState } from "react";
import store from "./store.js";

function App() {
  const [count, setCount] = useState(0);

  function increment() {
    store.dispatch({ type: "counter/increment" });
    setCount(store.getState().value);
  }

  return (
    <div className="App">
      Team Bears<div></div>
      <button onClick={increment}>+ 1</button>
      <br />
      {"Count: "}
      <div>{count}</div>
    </div>
  );
}

export default App;
