import '../App/App.scss';

function PreviewComponent(props) {
    const { previewObj, modalVisibility } = props;
    return (
        <>
            <br />
            <div className="user-form-container">
                <div className="user-form-field">
                    <label>Full Name</label>
                    <label>{previewObj.fullName}</label>
                </div>
                <br />
                <div className="user-form-field">
                    <label>Date of Birth</label>
                    <label>{previewObj.dateOfBrith}</label>
                </div>
                <br />
                <div className="user-form-field">
                    <label>Occupation</label>
                    <label>{previewObj.occupation}</label>
                </div>
                <br />
                <div className="user-form-field">
                    <label>Email</label>
                    <label>{previewObj.email}</label>
                </div>
                <br />
                <div className="user-form-field">
                    <label>Address</label>
                    <label>{previewObj.address}</label>
                </div>
                <br />
                <div className="user-form-field">
                    <label>Phone Number</label>
                    <label>{previewObj.phoneNo}</label>
                </div>
                <button onClick={modalVisibility}>close</button>
            </div>
        </>
    );
}

export default PreviewComponent;
