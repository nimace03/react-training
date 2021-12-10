import { Row, Col, Button } from "antd";
import './style.scss';

const PostListComponent = (props) => {
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
                                <label className="user-list-label">Title  : {list.fullName}</label>
                                <label className="user-list-email">Content : {list.email}</label>
                            </div>
                        </Col>
                    ))}
                </Row>
            </div >
        );
}

export default PostListComponent;
