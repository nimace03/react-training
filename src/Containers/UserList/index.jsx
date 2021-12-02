import { Row, Col, Button } from "antd";
import './style.scss';

const UserListComponent = (props) => {
  if (props.userListData.length === 0)
    return (
      <div className="user-list-container">
        <Row>
          <Col span={24}>
            <div className="user-list-empty">
              No Record
            </div>
          </Col>
        </Row>
      </div>
    );
  else
    return (
      <div className="user-list-container">
        <Row gutter={[10, 5]}>
          {props.userListData.map(list => (
            <Col span={6}>
              <div className="user-list-field">
                <label className="user-list-label">Name  : {list.fullName}</label>
                <label className="user-list-email">Email : {list.email}</label>
                <Button
                  type="link"
                  onClick={() => props.previewVisibility(list)}
                >
                  View More Details
                </Button>
              </div>
            </Col>
          ))}
        </Row>
      </div >
    );
}

export default UserListComponent;
