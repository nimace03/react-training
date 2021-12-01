import './App.scss';
import { Component } from "react";
import "antd/dist/antd.css";
import autoBind from "react-autobind";

import UserComponent from "../User";
import UserFuncComponent from "../UserFuncComponent";
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
  previewVisibility(previewData = {}) {
    this.setState({
      previewData,
      previewVisibility: !this.state.previewVisibility,
    })
  }
  resetPreviewState() {
    this.setState({
      previewData: null
    })
  }
  render() {
    const { previewData, previewVisibility } = this.state;
    return (
      <div className="app-container">
        {/* <UserComponent
          previewVisibility={this.previewVisibility}
          isVisibility={previewVisibility}
        /> */}
        <UserFuncComponent
          previewVisibility={this.previewVisibility}
          isVisibility={previewVisibility}
        />
        {previewVisibility &&
          <PreviewComponent
            previewObj={previewData}
            modalVisibility={this.previewVisibility}
            resetPreviewState={this.resetPreviewState}
          />
        }
      </div>
    );
  }
}

export default App;
