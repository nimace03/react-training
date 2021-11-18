import './App.scss';
import { Component } from "react";
import autoBind from "react-autobind";

import UserComponent from "../User";
import PreviewComponent from "../Common/previewCompnent";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      previewData: null,
      previewVisibility: false,
    }
    autoBind(this);
  }
  previewVisibility(previewData = null) {
    this.setState({
      previewData,
      previewVisibility: !this.state.previewVisibility,
    })
  }
  render() {
    const { previewData, previewVisibility } = this.state;
    return (
      <div className="app-container">
        <UserComponent
          previewVisibility={this.previewVisibility}
          isVisibility={previewVisibility}
        />
        {previewVisibility &&
          <PreviewComponent
            previewObj={previewData}
            modalVisibility={this.previewVisibility}
          />
        }
      </div>
    );
  }
}

export default App;
