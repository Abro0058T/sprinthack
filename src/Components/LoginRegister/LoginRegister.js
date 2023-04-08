import React, { useState } from "react";

import "./LoginRegister.css";

import { Login } from "../Login/Login";
import { Register } from "../Register/Register";

function LoginRegister() {
  const [currentForm, setCurrentForm] = useState("login");

  const toggleForm = (formName) => {
    setCurrentForm(formName);
  };

  return (
    <div className="LoginRegister">
      {currentForm === "login" ? (
        <Login onFormSwitch={toggleForm} />
      ) : (
        <Register onFormSwitch={toggleForm} />
      )}
    </div>
  );
}

export default LoginRegister;
