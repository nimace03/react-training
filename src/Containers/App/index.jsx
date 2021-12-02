import './App.scss';
import { Component } from "react";
import "antd/dist/antd.css";
import autoBind from "react-autobind";

// import UserComponent from "../User";
import UserFuncComponent from "../UserFuncComponent";
import UserDataListComponent from "../UserList";
import PreviewComponent from "../Common/previewCompnent";

class App extends Component {
  constructor(props) {
    super(props);
    // const userData = JSON.parse('[{"fullName":"nimesh","dateOfBrith":"11/11/11","occupation":"frontend","email":"nimesh@mail.com","address":"ktm","phoneNo":"1234567890"},{"fullName":"Leanne Graham","dateOfBrith":"11/22/11","occupation":"frontend","email":"Sincere@april.biz","address":"Gwenborough","phoneNo":"567890"},{"fullName":"Ervin Howell","dateOfBrith":"22/11/11","occupation":"software developer","email":"Shanna@melissa.tv","address":"Wisokyburgh","phoneNo":"23456789"},{"fullName":"Clementine Bauch","dateOfBrith":"12/6/21","occupation":"QA","email":"Nathan@yesenia.net","address":"McKenziehaven","phoneNo":"555-5555"},{"fullName":"Patricia Lebsack","dateOfBrith":"4/5/21","occupation":"frontend","email":"Julianne.OConner@kory.org","address":"South Elvis","phoneNo":"53919-4257"},{"fullName":"Chelsey Dietrich","dateOfBrith":"2/4/21","occupation":"Manager","email":"Lucio_Hettinger@annie.ca","address":"Roscoeview","phoneNo":"33263"}]');
    this.state = {
      userListData: [],
      previewData: null,
      previewVisibility: false,
      isSubmittedData: false,
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
  saveUserDataAction(userData) {
    const userListData = [...this.state.userListData];
    userListData.push(userData);
    this.setState({
      userListData: [...userListData],
      isSubmittedData: true,
    });
  }
  resetSubmittedData() {
    this.setState({
      isSubmittedData: false,
    })
  }
  render() {
    const { previewData, previewVisibility, isSubmittedData } = this.state;
    return (
      <div className="app-container">
        <UserFuncComponent
          submitAction={this.saveUserDataAction}
          isSubmittedData={isSubmittedData}
          resetSubmittedData={this.resetSubmittedData}
        />
        <UserDataListComponent
          userListData={this.state.userListData}
          previewVisibility={this.previewVisibility}
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
