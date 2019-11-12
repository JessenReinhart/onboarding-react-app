import React, { Component } from 'react';
import { render } from 'react-dom';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Login from './login';
import './style.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: 'React'
    };
  }

  async componentDidMount() {
   const response = await fetch("https://api.themoviedb.org/3/discover/movie?api_key=1967171a7fb0f71db60ca6c465e05f1d&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1")
   const data = await response.json()
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
              <Link to ="/login">Login</Link>
            </li>
          </ul>
        </nav>
        <Switch>
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
            <h2>Hello World</h2>
          </Route>
        </Switch>
      </Router>
    );
  }
}

render(<App />, document.getElementById('root'));
