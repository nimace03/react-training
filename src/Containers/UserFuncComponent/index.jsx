import { useState, useEffect } from 'react';
import { Row, Col, Button } from "antd";
import './style.scss';

const UserFuncComponent = (props) => {
  const [userFuncObj, handleUserObjChange] = useState({
    dateOfBrith: "",
    occupation: "",
    email: "",
    address: "",
    phoneNo: "",
    isError: false,
    isSubmitEnabled: false,
  });
  const [fullName, handleFullNameChange] = useState("");

  useEffect(() => {
    const { dateOfBrith, occupation, email, address, phoneNo } = userFuncObj;
    if (dateOfBrith && occupation && email && address && phoneNo.length > 9) {
      console.log("Userobj State Change ")
      console.log(userFuncObj)
    } else if (!isSubmitEnabled) {
      handleUserObjChange({
        ...userFuncObj,
        isSubmitEnabled: true,
      });
    }
  }, [userFuncObj]);

  useEffect(() => {
    if (props.isVisibility)
      console.log("Props change State in app")
  }, [props]);

  const handleChange = (key, value) => {
    handleUserObjChange({
      ...userFuncObj,
      [key]: value,
      isSubmitEnabled: false,
      isError: false,
    });
  }
  const submitAction = () => {
    if (!(fullName && dateOfBrith && occupation && email && address && phoneNo))
      handleUserObjChange({ ...userFuncObj, isError: true });
    props.previewVisibility({ ...userFuncObj });
    handleUserObjChange({
      dateOfBrith: "",
      occupation: "",
      email: "",
      address: "",
      phoneNo: "",
      isError: false,
    });
  }
  const {
    dateOfBrith,
    occupation,
    email,
    address,
    phoneNo,
    isError,
    isSubmitEnabled,
  } = userFuncObj;

  return (
    <div className="user-container">
      <Row gutter={[10, 10]}>
        <Col span={12}>
          <label className="user-label">Full Name </label>
        </Col>
        <Col span={12}>
          <input className="user-input" type="text" value={fullName} onChange={(event) => handleFullNameChange(event.target.value)} />
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
            className={props.isVisibility ? "user-submit-btn-disabled" : "user-submit-btn"}
            onClick={submitAction}
            disabled={isSubmitEnabled}
          >
            Submit
          </Button>
        </Col>
      </Row>
    </div>
  );
}

export default UserFuncComponent;
