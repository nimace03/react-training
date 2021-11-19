import { Component } from "react";
import autoBind from "react-autobind";
import './style.scss';

class UserComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fullName: "",
      dateOfBrith: "",
      occupation: "",
      email: "",
      address: "",
      phoneNo: "",
      isError: false,
    }
    autoBind(this);
  }
  handleClick() {
    const {
      fullName,
      dateOfBrith,
      occupation,
      email,
      address,
      phoneNo,
    } = this.state;
    if (!(fullName)) {
      this.setState({ isError: true })
      return;
    }
    this.props.previewVisibility({
      fullName,
      dateOfBrith,
      occupation,
      address,
      email,
      phoneNo,
    });
    this.setState({
      fullName: "",
      dateOfBrith: "",
      occupation: "",
      email: "",
      address: "",
      phoneNo: "",
    });
  }
  handleChange(field, value) {
    if (this.props.isVisibility) return;
    this.setState({
      [field]: value,
      isError: false,
    })
  }
  render() {
    const {
      fullName,
      dateOfBrith,
      occupation,
      address,
      phoneNo,
      email,
      isError
    } = this.state;
    const { isVisibility } = this.props;
    return (
      <div className="user-container">
        <div className="user-field">
          <label className="user-label">Full Name </label>
          <input className="user-input" type="text" value={fullName} onChange={(event) => this.handleChange("fullName", event.target.value)} />
        </div>
        <div className="user-field">
          <label className="user-label">Date Of Brith </label>
          <input className="user-input" type="text" value={dateOfBrith} onChange={(event) => this.handleChange("dateOfBrith", event.target.value)} />
        </div>
        <div className="user-field">
          <label className="user-label">Occupation </label>
          <input className="user-input" type="text" value={occupation} onChange={(event) => this.handleChange("occupation", event.target.value)} />
        </div>
        <div className="user-field">
          <label className="user-label">Email </label>
          <input className="user-input" type="text" value={email} onChange={(event) => this.handleChange("email", event.target.value)} />
        </div>
        <div className="user-field">
          <label className="user-label">Address </label>
          <input className="user-input" type="text" value={address} onChange={(event) => this.handleChange("address", event.target.value)} />
        </div>
        <div className="user-field">
          <label className="user-label">Phone Number </label>
          <input className="user-input" type="text" value={phoneNo} onChange={(event) => this.handleChange("phoneNo", event.target.value)} />
        </div>
        <div className="user-field">
          {isError && <label className="user-error">Please complete all details</label>}
        </div>
        <button className={isVisibility ? "user-submit-btn-disabled" : "user-submit-btn"} onClick={this.handleClick} disabled={this.props.isVisibility}>Submit</button>
      </div>
    );
  }
}

export default UserComponent;
