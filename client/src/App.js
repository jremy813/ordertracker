import React, { Component } from "react";
import Tracker from "./components/tracker";
import Admin from "./admin";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <div>
            <nav>
              <ul>
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/admin">Admin</Link>
                </li>
              </ul>
            </nav>

            {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
            <Switch>
              <Route exact path="/admin">
                <Admin />
              </Route>

              <Route path="/">
                <Tracker />
              </Route>
            </Switch>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
