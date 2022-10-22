import React, { useState } from "react";
import { redirect, useNavigate } from "react-router-dom";
import "../index.css";

const Login = () => {
  const [username, setUsername] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    // saves the username to localstorage
    localStorage.setItem("userId", username);
    setUsername("");
    // redirects to tasks page
    navigate("/tasks");
  };

  return (
    <div className="login_container">
      <form className="login_form" onSubmit={handleLogin}>
        <label htmlFor="username">Provide a username</label>
        <input
          type="text"
          name="username"
          id="username"
          required
          onChange={(e) => setUsername(e.target.value)}
          value={username}
        />
        <button type="submit">SIGN IN</button>
      </form>
    </div>
  );
};

export default Login;
