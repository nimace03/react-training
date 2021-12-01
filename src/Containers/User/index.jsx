import { Component } from "react";
import { Row, Col, Button } from "antd";
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
  componentDidUpdate(prevProps, prevState) {
    const {
      fullName,
      dateOfBrith,
      occupation,
      email,
      address,
      phoneNo,
    } = this.state;
    if (fullName && dateOfBrith && occupation && email && address && phoneNo.length === 9) {
      this.handleClick();
    }
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
    }, () => {
      console.log(this.state.fullName)
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
        <Row gutter={[10, 10]}>
          <Col span={12}>
            <label className="user-label">Full Name </label>
          </Col>
          <Col span={12}>
            <input className="user-input" type="text" value={fullName} onChange={(event) => this.handleChange("fullName", event.target.value)} />
          </Col>
          <Col span={12}>
            <label className="user-label">Date Of Brith </label>
          </Col>
          <Col span={12}>
            <input className="user-input" type="text" value={dateOfBrith} onChange={(event) => this.handleChange("dateOfBrith", event.target.value)} />
          </Col>
          <Col span={12}>
            <label className="user-label">Occupation </label>
          </Col>
          <Col span={12}>
            <input className="user-input" type="text" value={occupation} onChange={(event) => this.handleChange("occupation", event.target.value)} />
          </Col>
          <Col span={12}>
            <label className="user-label">Email </label>
          </Col>
          <Col span={12}>
            <input className="user-input" type="text" value={email} onChange={(event) => this.handleChange("email", event.target.value)} />
          </Col>
          <Col span={12}>
            <label className="user-label">Address </label>
          </Col>
          <Col span={12}>
            <input className="user-input" type="text" value={address} onChange={(event) => this.handleChange("address", event.target.value)} />
          </Col>
          <Col span={12}>
            <label className="user-label">Phone Number </label>
          </Col>
          <Col span={12}>
            <input className="user-input" type="text" value={phoneNo} onChange={(event) => this.handleChange("phoneNo", event.target.value)} />
          </Col>
          <Col span={24}>
            {isError && <label className="user-error">Please complete all details</label>}
          </Col>
          <Col span={24}>
            <Button
              type="primary"
              className={isVisibility ? "user-submit-btn-disabled" : "user-submit-btn"}
              onClick={this.handleClick}
              disabled={this.props.isVisibility}
            >
              Submit
            </Button>
          </Col>
        </Row>

      </div>
    );
  }
}

export default UserComponent;
