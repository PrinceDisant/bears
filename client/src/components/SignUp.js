import React from "react";
import "./signup.css";

export default function SignUp() {
  const SignUpClick = (e) => {
    e.preventDefault();
    console.log("sign up button");
  };
  return (
    <div className="divSignUpContainer">
      <form className="signUpContainer" onSubmit={SignUpClick}>
        <label>Name</label>
        <input type="text" name="name" />
        <label>Email</label>
        <input type="text" name="email" />
        <label>Password</label>
        <input type="text" name="password" />
        <label>Password</label>
        <input type="text" name="password" />
        <button>Sign Up</button>
      </form>
    </div>
  );
}
