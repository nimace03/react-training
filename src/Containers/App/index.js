import './App.scss';
import React from "react";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      counters: 0,
      name: "default",
      showContainer: false,
    }
  }
  handleChange = () => {
    this.setState({
      counters: this.state.counters + 1,
    })
  }

  handleOnChange = (value) => {
    this.setState({
      name: value,
    })
  }

  handleShowChange = () => {
    this.setState({
      showContainer: !this.state.showContainer,
    })
  }
  render() {
    return (
      <div className="first-component" style={{ padding: "50px", border: "1px solid black" }}>
        Parent Component {this.state.counters}
        <div>
          <input value={this.state.name} onChange={(event) => this.handleOnChange(event.target.value)} />
          <button onClick={this.handleChange} style={{ marginTop: "50px", backgroundColor: "#E67E22", color: "white", borderRadius: "5px" }}>
            Click for increment
          </button>
          <button onClick={this.handleShowChange} style={{ marginLeft: "10px", backgroundColor: "#E67E22", color: "white", borderRadius: "5px" }}>
            Click to show Container
          </button>
        </div>

        {this.state.showContainer &&
          <div style={{ with: "200px", padding: "50px" }}>
            Show container on condition
          </div>
        }
      </div>
    );
  }
}

export default App;
