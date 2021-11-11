import React from "react";
import './App.scss';

class SecondComponent extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="App" style={{ padding: "50px", border: "1px solid black" }}>
        <div> Second Component </div>
        <ReactMemoText />
      </div>
    );
  }
}

let ReactMemoText = () => (
  <div className="App" style={{ marginTop: "100px", padding: "50px", border: "1px solid black" }}>
    functional Component
  </div>
);
ReactMemoText = React.memo(ReactMemoText);
export default React.memo(SecondComponent);







