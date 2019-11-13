import React from "react";
import { render } from "react-dom";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { createStore } from "redux";
import { Provider } from "react-redux";
import allReducers from "./reducer/index";
import Login from "./login";
import Home from "./container/home";
import Register from "./register";
import "./style.css";

let store = createStore(
  allReducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

const App = () => {
  return (
    <Provider store={store}>
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
            <Route path="/register" component={Register} />
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
    </Provider>
  );
};

render(<App />, document.getElementById("root"));
