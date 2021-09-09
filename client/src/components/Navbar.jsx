import React from "react";
import store from "../store";
import "./navbar.css";

function Navbar() {
  function increment() {
    store.dispatch({ type: "counter/increment" });
  }

  return (
    <div className="navbar-wrapper">
      <div></div>
      <button onClick={increment()}>+ 1</button>
    </div>
  );
}

export default Navbar;
