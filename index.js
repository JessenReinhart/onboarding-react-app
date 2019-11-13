import React, { Component } from "react";
import { render } from "react-dom";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Login from "./login";
import Home from "./container/home";
import Register from './register';
import "./style.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: "React"
    };
  }

  render() {
    return (
      <Router>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/users">Users</Link>
            </li>
            <li>
              <Link to="/login">Login</Link>
            </li>
          </ul>
        </nav>
        <main>
          <Switch>
            <Route path="/register" component={Register}>
            </Route>
            <Route path="/about">
              <h2>About</h2>
            </Route>
            <Route path="/users">
              <h2>Users</h2>
            </Route>
            <Route path="/login">
              <Login />
            </Route>
            <Route path="/" exact>
              <Home />
            </Route>
          </Switch>
        </main>
      </Router>
    );
  }
}

render(<App />, document.getElementById("root"));
