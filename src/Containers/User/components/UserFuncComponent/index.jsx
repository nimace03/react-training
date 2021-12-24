import { useState, useEffect } from 'react';
import { Row, Col, Button, message } from "antd";
import './style.scss';

const UserFuncComponent = (props) => {
  const [userFuncObj, handleUserObjChange] = useState({
    name: "",
    email: "",
    userAddress: "",
    phone: "",
    userCompany: "",
    isError: false,
  });
  const handleChange = (key, value) => {
    handleUserObjChange({
      ...userFuncObj,
      [key]: value,
      isError: false,
    });
  }
  const submitAction = () => {
    const {
      name,
      email,
      userAddress,
      phone,
      userCompany,
    } = userFuncObj;
    if (!(name && email && userAddress && phone && userCompany))
      handleUserObjChange({ ...userFuncObj, isError: true });
    props.submitAction({
      name,
      email,
      userAddress,
      phone,
      userCompany,
    });
    handleUserObjChange({
      name: "",
      email: "",
      userAddress: "",
      phone: "",
      userCompany: "",
      isError: false,
    });
  }
  const {
    name,
    email,
    userAddress,
    phone,
    userCompany,
    isError,
  } = userFuncObj;
  return (
    <div className="user-container">
      <Row gutter={[10, 10]}>
        <Col span={12}>
          <label className="user-label">Full Name </label>
        </Col>
        <Col span={12}>
          <input className="user-input" type="text" value={name} onChange={(event) => handleChange("name", event.target.value)} />
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
          <input className="user-input" type="text" value={userAddress} onChange={(event) => handleChange("userAddress", event.target.value)} />
        </Col>
        <Col span={12}>
          <label className="user-label">Phone Number </label>
        </Col>
        <Col span={12}>
          <input className="user-input" type="text" value={phone} onChange={(event) => handleChange("phone", event.target.value)} />
        </Col>
        <Col span={12}>
          <label className="user-label">Company Name </label>
        </Col>
        <Col span={12}>
          <input className="user-input" type="text" value={userCompany} onChange={(event) => handleChange("userCompany", event.target.value)} />
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
