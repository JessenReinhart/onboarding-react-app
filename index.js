import React from "react";
import { render } from "react-dom";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { createStore } from "redux";
import { Provider, useSelector } from "react-redux";
import allReducers from "./reducer/index";
import Login from "./container/login";
import Home from "./container/home";
import Navprofile from "./container/navprofile";
import Register from "./component/register";
import Edituser from './container/edituser'
import "./style.css";

let store = createStore(
  allReducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

const App = () => {
  const isLoggedIn = useSelector(state => state.logged);

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
            {isLoggedIn ? (
              <Navprofile />
            ) : (
              <Link to="/login">Login</Link>
            )}
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
          <Route path="/login" component={Login} />
          <Route path="/edituser" component={Edituser} />
          <Route path="/" exact component={Home} />
        </Switch>
      </main>
    </Router>
  );
};

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
