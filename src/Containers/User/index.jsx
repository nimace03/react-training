import UserComponent from "./components";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { TestAction } from "../App/action";
import {
    succeededGetUserDataList,
    resetUserDataList,
    updateUserDataList,
    resetUpdateUserDataList,
    deleteUserData,
    resetDeleteUserData,
    addUserData,
    resetAddUserData,
} from './action';
import { connect } from "react-redux";
const UserComponentWithRouter = (props) => {
    let getLocation = useLocation();
    let getNav = useNavigate();
    let getParam = useParams();
    return <UserComponent
        history={getLocation}
        navigate={getNav}
        getParam={getParam}
        {...props}
    />;
};
const mapStateToProps = ({ app, user }) => ({
    AppName: app.AppName,
    AppName2: app.AppName2,

    // User State
    userDataList: user.userDataList,
    succeededGetUserData: user.succeededGetUserData,
    succeededUpdatedUserData: user.succeededUpdatedUserData,
    succeededDeleteUserData: user.succeededDeleteUserData,
    succeededAddUserData: user.succeededAddUserData,
})

const mapDispatchToProps = {
    TestAction,
    // User Action
    succeededGetUserDataList,
    resetUserDataList,
    updateUserDataList,
    resetUpdateUserDataList,
    deleteUserData,
    resetDeleteUserData,
    addUserData,
    resetAddUserData,
}

export default connect(mapStateToProps, mapDispatchToProps)(UserComponentWithRouter);