import { Row, Col, Button, Table } from "antd";
import { ZoomInOutlined, } from '@ant-design/icons';

import '../style.scss';

const PostListComponent = (props) => {
    const columns = [
        {
            title: "Title",
            dataIndex: "title",
            key: "title",
        },
        {
            title: "Body",
            dataIndex: "body",
            key: "body",
        },
        {
            title: "Action",
            render: (record) =>
                <div className="user-action">
                    <ZoomInOutlined
                        className="user-preview"
                        onClick={() => props.navigate(`/post-details/${record.id}`)}
                    />
                </div>
        },
    ];

    if (props.postList.length === 0)
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
                    <Col span={24}>
                        <Table
                            columns={columns}
                            dataSource={props.postList}
                            size="middle"
                            pagination={false}
                        />
                    </Col>
                </Row>
            </div >
        );
}

export default PostListComponent;
