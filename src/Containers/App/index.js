import './App.scss';
import React from "react";
import FirstComponent from "../User/FirstComponent";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      counters: 0,
      name: "default",
      nameObj: {
        firstName: "Mark",
        lastName: "Wal",
      },
      nameListArr: ["Hello", "world"],
      showContainer: false,
    }
  }
  handleChange = (key, value) => {
    this.setState({
      [key]: value,
    })
  }
  handleShowChange = () => {
    this.setState({
      showContainer: !this.state.showContainer,
    })
  }
  handleUpdateField = (key, value) => {
    this.setState({
      nameObj: {
        ...this.state.nameObj,
        [key]: value
      }
    })
  }
  handleUpdateArrField = (index, value) => {
    let updatedNameListArr = [...this.state.nameListArr];
    updatedNameListArr[index] = value;
    this.setState({
      nameListArr: [...updatedNameListArr]
    })
  }
  render() {
    const styleComponent = {
      marginLeft: "10px",
      marginRight: "10px"
    }
    const { nameListArr, counters, name } = this.state;
    const { handleChange } = this;
    return (
      <div className="first-component" style={{ padding: "50px", border: "1px solid black" }}>
        Parent Component {counters}
        <div>
          <label>Name State</label>
          <input
            style={styleComponent}
            value={name}
            onChange={(event) => this.handleChange("name", event.target.value)} />
          {/* <label>First Name</label>
          <input style={styleComponent} value={nameListArr[0]} onChange={(event) => this.handleUpdateArrField(0, event.target.value)} />
          <label>Last Name</label>
          <input style={styleComponent} value={nameListArr[1]} onChange={(event) => this.handleUpdateArrField(1, event.target.value)} /> */}
          <button onClick={() => handleChange("counters", counters + 1)} style={{ marginTop: "50px", backgroundColor: "#E67E22", color: "white", borderRadius: "5px" }}>
            Click for increment
          </button>
          {/* <button onClick={this.handleShowChange} style={{ marginLeft: "10px", backgroundColor: "#E67E22", color: "white", borderRadius: "5px" }}>
            Click to show Container
          </button> */}
        </div>

        {/* {this.state.showContainer &&
          <div style={{ with: "200px", padding: "50px" }}>
            Show container on condition
          </div>
        }
        <FirstComponent
          counters={this.state.counters}
          handleChange={this.handleChange}
        /> */}
      </div>
    );
  }
}

export default App;
