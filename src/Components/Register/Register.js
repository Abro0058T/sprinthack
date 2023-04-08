import React, { useState } from "react";

export const Register = (props) => {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [group, setGroup] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email);
  };

  return (
    <div className="auth-form-container">
      <h2>Create new account</h2>
      <form className="register-form" onSubmit={handleSubmit}>
        <label htmlFor="name">Full Name</label>
        <input
          value={name}
          name="name"
          onChange={(e) => setName(e.target.value)}
          id="name"
          placeholder="Enter your full name"
        />
        <label htmlFor="email">Email</label>
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          placeholder="Enter your email"
          id="email"
          name="email"
        />
        <label htmlFor="password">Password</label>
        <input
          value={pass}
          onChange={(e) => setPass(e.target.value)}
          type="password"
          placeholder="Create your password"
          id="password"
          name="password"
        />
        <label htmlFor="number">Mobile Number</label>
        <input
          value={number}
          onChange={(e) => setNumber(e.target.value)}
          type="number"
          placeholder="Enter your mobile number"
          id="number"
          name="number"
        />
        <label htmlFor="name">Blood Group</label>
        <input
          value={group}
          name="group"
          onChange={(e) => setGroup(e.target.value)}
          id="group"
          placeholder="Enter your blood group"
        />
        <button className="btn-main" type="submit">
          Register
        </button>
      </form>
      <button className="link-btn" onClick={() => props.onFormSwitch("login")}>
        Already have an account? Login here.
      </button>
    </div>
  );
};
