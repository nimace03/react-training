import '../style.scss';
import { Component } from "react";
import "antd/dist/antd.css";
import autoBind from "react-autobind";
import { Button, message, Spin } from "antd";
import { LoadingOutlined } from '@ant-design/icons';

// import UserComponent from "../User";
import UserDataListComponent from "./UserList";
import UserEditModal from "../../Common/userEditModal";
import PreviewComponent from "../../Common/previewCompnent";
import AddUserComponent from "./UserFuncComponent";

import { getUserList } from "../api";

const antIcon = <LoadingOutlined style={{ fontSize: 24 }} spin />;

class UserComponent extends Component {
  constructor(props) {
    super(props);
    // const userData = JSON.parse('[{"fullName":"nimesh","dateOfBrith":"11/11/11","occupation":"frontend","email":"nimesh@mail.com","address":"ktm","phoneNo":"1234567890"},{"fullName":"Leanne Graham","dateOfBrith":"11/22/11","occupation":"frontend","email":"Sincere@april.biz","address":"Gwenborough","phoneNo":"567890"},{"fullName":"Ervin Howell","dateOfBrith":"22/11/11","occupation":"software developer","email":"Shanna@melissa.tv","address":"Wisokyburgh","phoneNo":"23456789"},{"fullName":"Clementine Bauch","dateOfBrith":"12/6/21","occupation":"QA","email":"Nathan@yesenia.net","address":"McKenziehaven","phoneNo":"555-5555"},{"fullName":"Patricia Lebsack","dateOfBrith":"4/5/21","occupation":"frontend","email":"Julianne.OConner@kory.org","address":"South Elvis","phoneNo":"53919-4257"},{"fullName":"Chelsey Dietrich","dateOfBrith":"2/4/21","occupation":"Manager","email":"Lucio_Hettinger@annie.ca","address":"Roscoeview","phoneNo":"33263"}]');
    this.state = {
      isLoading: false,
      previewData: null,
      selectedUserData: null,
      userEditVisibility: false,
      previewVisibility: false,
    }
    autoBind(this);
  }
  componentDidMount() {
    // this.getAllUserDataAsync();
  }
  componentDidUpdate(prevProps) {
    if (this.props.succeededGetUserData !== prevProps.succeededGetUserData &&
      this.props.succeededGetUserData) {
      this.props.resetUserDataList();
      message.success("Successfully fetch user data.")
    }
    if (this.props.succeededUpdatedUserData !== prevProps.succeededUpdatedUserData &&
      this.props.succeededUpdatedUserData) {
      message.success("User data updated.");
      this.userEditVisibilityAction();
      this.props.resetUpdateUserDataList();
    }
    if (this.props.succeededDeleteUserData !== prevProps.succeededDeleteUserData &&
      this.props.succeededDeleteUserData) {
      message.success("User data deleted.");
      this.props.resetDeleteUserData();
    }
    if (this.props.succeededAddUserData !== prevProps.succeededAddUserData &&
      this.props.succeededAddUserData) {
      message.success("User data Added.");
      this.props.resetAddUserData();
    }
  }
  previewVisibilityAction(previewData = {}) {
    this.setState({
      previewData,
      previewVisibility: !this.state.previewVisibility,
    })
  }
  resetPreviewState() {
    this.setState({
      previewData: null
    })
  }
  saveUserDataAction(userData) {
    this.props.addUserData(userData);
  }
  async getAllUserDataAsync() {
    this.setState({ isLoading: true, })
    const getUserData = await getUserList();
    if (getUserData && getUserData.length > 0) {
      this.props.succeededGetUserDataList(getUserData);
    }
    this.setState({ isLoading: false, })
  }
  deleteUserListAction(userId) {
    this.props.deleteUserData(userId);
  }
  updateSelectedUser() {
    this.props.updateUserDataList(this.state.selectedUserData);
  }
  handleChangeEditUser(key, value) {
    this.setState({
      selectedUserData: {
        ...this.state.selectedUserData,
        [key]: value,
      }
    })
  }
  userEditVisibilityAction(selectedUserData = null) {
    this.setState({
      selectedUserData,
      userEditVisibility: selectedUserData ? true : false,
    })
  }
  render() {
    const {
      previewData,
      previewVisibility,
      isLoading,
      userEditVisibility,
    } = this.state;
    return (
      <div className="app-container">
        <Spin className="app-loading" indicator={antIcon} spinning={isLoading} />
        <Button onClick={this.getAllUserDataAsync}>Api Call</Button>
        <AddUserComponent
          submitAction={this.saveUserDataAction}
        />
        <UserDataListComponent
          userListData={this.props.userDataList}
          editUserListAction={this.userEditVisibilityAction}
          deleteUserListAction={this.deleteUserListAction}
          previewVisibilityAction={this.previewVisibilityAction}
        />
        {previewVisibility &&
          <PreviewComponent
            previewObj={previewData}
            modalVisibility={this.previewVisibilityAction}
            resetPreviewState={this.resetPreviewState}
          />
        }
        {userEditVisibility &&
          <UserEditModal
            userData={this.state.selectedUserData}
            submitAction={this.updateSelectedUser}
            handleChange={this.handleChangeEditUser}
            modalVisibility={this.userEditVisibilityAction}
          />
        }
      </div>
    );
  }
}

export default UserComponent;
