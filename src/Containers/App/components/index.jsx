import { Component } from "react";
import { Routes, Route, Link } from "react-router-dom";
import autoBind from "react-autobind";
import '../App.scss';

import UserComponent from "../../User";
import PostComponent from "../../Posts";
import PostSelectedComponent from "../../PostsSelectedShow";

class App extends Component {
  constructor(props) {
    super(props);
    autoBind(this);
  }
  componentDidMount() {
    // const getState = this.props.getStore.getState("AppState");
    console.log(this.props.getStore)
  }
  componentDidUpdate() {
    console.log("Location updated in App")
    console.log(this.props)
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
          {this.props.history &&
            this.props.history.pathname === "/posts" &&
            <div className="app-header-list">
              <Link to="/post-details/1">Post get 1</Link>
            </div>
          }
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
          <Route
            path="/post-details/:post_id"
            element={<PostSelectedComponent />}
          />
        </Routes>
      </div >
    );
  }
}

export default App;
