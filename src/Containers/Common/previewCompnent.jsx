import { useEffect } from 'react';
import '../App/App.scss';
import { Modal, Button } from "antd";
import { Row, Col } from "antd";

const PreviewComponent = (props) => {
    const { previewObj, modalVisibility } = props;
    useEffect(() => {
        return () => {
            console.log("Component will unmount ")
            props.resetPreviewState();
        }
    }, []);
    return (
        <Modal
            title="Preview User Details"
            visible={true}
            onCancel={modalVisibility}
            footer={(<Button type="primary" onClick={() => props.modalVisibility()} >Close</Button>)}
        >
            <Row gutter={[10, 10]}>
                <Col span={12}>
                    <label className="user-label">Name</label>
                </Col>
                <Col span={12}>
                    <div className="user-detail">{(previewObj.name || "")}</div>
                </Col>
                <Col span={12}>
                    <label className="user-label">Email</label>
                </Col>
                <Col span={12}>
                    <div className="user-detail">{(previewObj.email || "")}</div>
                </Col>
                <Col span={12}>
                    <label className="user-label">Address</label>
                </Col>
                <Col span={12}>
                    <div className="user-detail">{(previewObj.userAddress || "")}</div>
                </Col>
                <Col span={12}>
                    <label className="user-label">Phone No.</label>
                </Col>
                <Col span={12}>
                    <div className="user-detail">{(previewObj.phone || "")}</div>
                </Col>
                <Col span={12}>
                    <label className="user-label">Company</label>
                </Col>
                <Col span={12}>
                    <div className="user-detail">{(previewObj.userCompany || "")}</div>
                </Col>
            </Row>
        </Modal>
    );
}

export default PreviewComponent;
