import React from "react";
import './App.scss';

class FirstComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      counters: 0,
    }
  }
  componentDidMount() {
    document.title = "CHange from first component";
  }
  handleChange = () => {
    this.setState({
      counters: this.state.counters + 1,
    })
  }
  render() {
    return (
      <div className="first-component" style={{ padding: "50px", border: "1px solid black" }}>
        First Component {this.props.counters}
        <div>
          <button onClick={this.props.handleChange} style={{ marginTop: "50px", backgroundColor: "#E67E22", color: "white", borderRadius: "5px" }}>
            Click for increment
            </button>
        </div>
      </div>
    );
  }
}

export default FirstComponent;
