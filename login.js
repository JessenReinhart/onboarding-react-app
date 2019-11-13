import React, { Component } from "react";
import { render } from "react-dom";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./style.css";

const Login = () => {
  
  const login = () => {
    alert("Logged in!")
  }

  return (
    <div className="login">
      <h3>Login</h3>
      <input type="text" placeholder="username" />
      <input type="password" placeholder="password" />
      <button className="main-button" onClick={login}>
        Login
      </button>
      <Link to="/register" className="secondary-button">
        Register
      </Link>
    </div>
  );
};

export default Login;
