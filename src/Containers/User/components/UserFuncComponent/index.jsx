import { useState, useEffect } from 'react';
import { Row, Col, Button, message } from "antd";
import './style.scss';

const UserFuncComponent = (props) => {
  const [userFuncObj, handleUserObjChange] = useState({
    fullName: "",
    dateOfBrith: "",
    occupation: "",
    email: "",
    address: "",
    phoneNo: "",
    isError: false,
  });
  useEffect(() => {
    if (props.isSubmittedData) {
      message.success("User data store successfully.")
      props.resetSubmittedData();
    }
  }, [props])
  const handleChange = (key, value) => {
    handleUserObjChange({
      ...userFuncObj,
      [key]: value,
      isError: false,
    });
  }
  const submitAction = () => {
    const {
      fullName,
      dateOfBrith,
      occupation,
      email,
      address,
      phoneNo,
    } = userFuncObj;
    if (!(fullName && dateOfBrith && occupation && email && address && phoneNo))
      handleUserObjChange({ ...userFuncObj, isError: true });
    props.submitAction({
      fullName,
      dateOfBrith,
      occupation,
      email,
      address,
      phoneNo,
    });
    handleUserObjChange({
      fullName: "",
      dateOfBrith: "",
      occupation: "",
      email: "",
      address: "",
      phoneNo: "",
      isError: false,
    });
  }
  const {
    fullName,
    dateOfBrith,
    occupation,
    email,
    address,
    phoneNo,
    isError,
  } = userFuncObj;
  return (
    <div className="user-container">
      <Row gutter={[10, 10]}>
        <Col span={12}>
          <label className="user-label">Full Name </label>
        </Col>
        <Col span={12}>
          <input className="user-input" type="text" value={fullName} onChange={(event) => handleChange("fullName", event.target.value)} />
        </Col>
        <Col span={12}>
          <label className="user-label">Date Of Brith </label>
        </Col>
        <Col span={12}>
          <input className="user-input" type="text" value={dateOfBrith} onChange={(event) => handleChange("dateOfBrith", event.target.value)} />
        </Col>
        <Col span={12}>
          <label className="user-label">Occupation </label>
        </Col>
        <Col span={12}>
          <input className="user-input" type="text" value={occupation} onChange={(event) => handleChange("occupation", event.target.value)} />
        </Col>
        <Col span={12}>
          <label className="user-label">Email </label>
        </Col>
        <Col span={12}>
          <input className="user-input" type="text" value={email} onChange={(event) => handleChange("email", event.target.value)} />
        </Col>
        <Col span={12}>
          <label className="user-label">Address </label>
        </Col>
        <Col span={12}>
          <input className="user-input" type="text" value={address} onChange={(event) => handleChange("address", event.target.value)} />
        </Col>
        <Col span={12}>
          <label className="user-label">Phone Number </label>
        </Col>
        <Col span={12}>
          <input className="user-input" type="text" value={phoneNo} onChange={(event) => handleChange("phoneNo", event.target.value)} />
        </Col>
        <Col span={24}>
          {isError && <label className="user-error">Please complete all details</label>}
        </Col>
        <Col span={24}>
          <Button
            type="primary"
            onClick={submitAction}
          >
            Submit
          </Button>
        </Col>
      </Row>
    </div>
  );
}

export default UserFuncComponent;
