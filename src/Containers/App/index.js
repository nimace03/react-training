import './App.scss';
import React from "react";
import PreviewComponent from "./previewCompnent";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.initialUserForm = {
      fullName: "",
      dateOfBrith: "",
      occupation: "",
      email: "",
      address: "",
      phoneNo: "",
    }
    this.state = {
      userFormObj: { ...this.initialUserForm },
      previewFormObj: null,
      showPreviewVisibility: false,
    }
  }
  handleUserFormChange = (field, value) => {
    this.setState({
      userFormObj: {
        ...this.state.userFormObj,
        [field]: value,
      }
    });
  }
  submitAction = () => {
    this.setState({
      previewFormObj: { ...this.state.userFormObj },
      userFormObj: { ...this.initialUserForm },
    })
    this.previewVisibility();
  }
  previewVisibility = () => {
    this.setState({
      showPreviewVisibility: !this.state.showPreviewVisibility,
    })
  }
  render() {
    const { userFormObj, showPreviewVisibility, previewFormObj } = this.state;
    return (
      <div className="app-container">
        <div className="user-form-container">
          <div className="user-form-field">
            <label>Full Name</label>
            <input
              placeholder="Full Name"
              value={userFormObj.fullName}
              onChange={(event) => this.handleUserFormChange("fullName", event.target.value)}
            />
          </div>
          <br />
          <div className="user-form-field">
            <label>Date of Birth</label>
            <input placeholder="Date of Birth" value={userFormObj.dateOfBrith} onChange={(event) => this.handleUserFormChange("dateOfBrith", event.target.value)} />
          </div>
          <br />
          <div className="user-form-field">
            <label>Occupation</label>
            <input placeholder="Occupation" value={userFormObj.occupation} onChange={(event) => this.handleUserFormChange("occupation", event.target.value)} />
          </div>
          <br />
          <div className="user-form-field">
            <label>Email</label>
            <input placeholder="Email" value={userFormObj.email} onChange={(event) => this.handleUserFormChange("email", event.target.value)} />
          </div>
          <br />
          <div className="user-form-field">
            <label>Address</label>
            <input placeholder="Address" value={userFormObj.address} onChange={(event) => this.handleUserFormChange("address", event.target.value)} />
          </div>
          <br />
          <div className="user-form-field">
            <label>Phone Number</label>
            <input placeholder="Phone Number" value={userFormObj.phoneNo} onChange={(event) => this.handleUserFormChange("phoneNo", event.target.value)} />
          </div>
          <button onClick={this.submitAction}>Submit</button>
        </div>
        <br />
        {showPreviewVisibility &&
          <PreviewComponent
            previewObj={previewFormObj}
            modalVisibility={this.previewVisibility}
          />
        }
      </div>
    );
  }
}

export default App;
