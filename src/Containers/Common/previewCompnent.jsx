import { useEffect } from 'react';
import '../App/App.scss';
import { Modal } from "antd";
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
        >
            <Row gutter={[10, 10]}>
                <Col span={12}>
                    <label className="user-label">Full Name</label>
                </Col>
                <Col span={12}>
                    <div className="user-detail">{(previewObj.fullName || "")}</div>
                </Col>
                <Col span={12}>
                    <label className="user-label">Date of Birth</label>
                </Col>
                <Col span={12}>
                    <div className="user-detail">{(previewObj.dateOfBrith || "")}</div>
                </Col>
                {/*<Col span={12}> 
                    <label className="user-label">Occupation</label>
                </Col>
                <Col span={12}>
                    <div className="user-detail">{(previewObj.occupation || "")}</div>
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
                    <div className="user-detail">{(previewObj.address || "")}</div>
                </Col>
                <Col span={12}>
                    <label className="user-label">Phone Number</label>
                </Col>
                <Col span={12}>
                    <div className="user-detail">{(previewObj.phoneNo || "")}</div>
                </Col> */}
            </Row>
        </Modal>
    );
}

export default PreviewComponent;
