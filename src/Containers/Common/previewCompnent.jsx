import '../App/App.scss';

function PreviewComponent(props) {
    const { previewObj, modalVisibility } = props;
    return (
        <>
            <br />
            <div className="preview-container">
                <div className="user-form-field">
                    <label className="user-label">Full Name</label>
                    <div className="user-detail">{previewObj.fullName}</div>
                </div>
                <div className="user-form-field">
                    <label className="user-label">Date of Birth</label>
                    <div className="user-detail">{previewObj.dateOfBrith}</div>
                </div>
                <div className="user-form-field">
                    <label className="user-label">Occupation</label>
                    <div className="user-detail">{previewObj.occupation}</div>
                </div>
                <div className="user-form-field">
                    <label className="user-label">Email</label>
                    <div className="user-detail">{previewObj.email}</div>
                </div>
                <div className="user-form-field">
                    <label className="user-label">Address</label>
                    <div className="user-detail">{previewObj.address}</div>
                </div>
                <div className="user-form-field">
                    <label className="user-label">Phone Number</label>
                    <div className="user-detail">{previewObj.phoneNo}</div>
                </div>
                <br />
                <button className="close-preview-btn" onClick={modalVisibility}>close</button>
            </div>
        </>
    );
}

export default PreviewComponent;
