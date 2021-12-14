import { Component } from "react";
import { Routes, Route, Link } from "react-router-dom";
import autoBind from "react-autobind";
import './App.scss';

import UserComponent from "../User";
import PostComponent from "../Posts";

class App extends Component {
  constructor(props) {
    super(props);
    autoBind(this);
  }
  render() {
    return (
      <div className="app-container">
        <div className="app-header">
          <div className="app-header-list">
            <Link to="/">User</Link>
          </div>
          <div className="app-header-list">
            <Link to="/posts">Post</Link>
          </div>
        </div>
        <br />
        <Routes>
          <Route
            path="/"
            element={<UserComponent />}
          />
          <Route
            path="/posts"
            element={<PostComponent />}
          />
        </Routes>
      </div >
    );
  }
}

export default App;
