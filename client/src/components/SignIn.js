import React from "react";
import "./signin.css";

export default function SignIn() {
  const SignInClick = (e) => {
    e.preventDefault();
    console.log("sign in button");
  };
  return (
    <div className="divSignInContainer">
      <form className="signInContainer" onSubmit={SignInClick}>
        <label>Email</label>
        <input type="text" name="email" />
        <label>Password</label>
        <input type="text" name="password" />
        <button>Sign In</button>
      </form>
    </div>
  );
}
