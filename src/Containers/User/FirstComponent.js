import React from "react";

class FirstComponent extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const {
      counters,
      handleChange,
    } = this.props;
    return (
      <div className="first-component" style={{ padding: "50px", border: "1px solid black" }}>
        First Component counter state : {counters}
        <div>
          <button onClick={() => handleChange(100)} style={{ marginTop: "50px", backgroundColor: "#E67E22", color: "white", borderRadius: "5px" }}>
            Click for increment 100
            </button>
        </div>
      </div>
    );
  }
}

export default FirstComponent;
