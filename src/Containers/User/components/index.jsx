import '../style.scss';
import { Component } from "react";
import "antd/dist/antd.css";
import autoBind from "react-autobind";
import { Button, message, Spin } from "antd";
import { LoadingOutlined } from '@ant-design/icons';
// import UserComponent from "../User";
import UserDataListComponent from "./UserList";

import { getUserList, updatedUserPost } from "../../App/api";
const antIcon = <LoadingOutlined style={{ fontSize: 24 }} spin />;
class UserComponent extends Component {
  constructor(props) {
    super(props);
    // const userData = JSON.parse('[{"fullName":"nimesh","dateOfBrith":"11/11/11","occupation":"frontend","email":"nimesh@mail.com","address":"ktm","phoneNo":"1234567890"},{"fullName":"Leanne Graham","dateOfBrith":"11/22/11","occupation":"frontend","email":"Sincere@april.biz","address":"Gwenborough","phoneNo":"567890"},{"fullName":"Ervin Howell","dateOfBrith":"22/11/11","occupation":"software developer","email":"Shanna@melissa.tv","address":"Wisokyburgh","phoneNo":"23456789"},{"fullName":"Clementine Bauch","dateOfBrith":"12/6/21","occupation":"QA","email":"Nathan@yesenia.net","address":"McKenziehaven","phoneNo":"555-5555"},{"fullName":"Patricia Lebsack","dateOfBrith":"4/5/21","occupation":"frontend","email":"Julianne.OConner@kory.org","address":"South Elvis","phoneNo":"53919-4257"},{"fullName":"Chelsey Dietrich","dateOfBrith":"2/4/21","occupation":"Manager","email":"Lucio_Hettinger@annie.ca","address":"Roscoeview","phoneNo":"33263"}]');
    this.state = {
      userListData: [],
      postListData: [],
      previewData: null,
      previewVisibility: false,
      isSubmittedData: false,
      succeededFetchUserData: false,
      succeededUpdateUserData: false,
      isLoading: false,
      selectedUserData: null,
      userEditVisibility: false,
      historyState: null,
    }
    autoBind(this);
  }
  componentDidMount() {
    // this.getAllUserData();
    console.log(this.props)
  }
  componentDidUpdate(prevProps) {
    if (this.state.succeededFetchUserData !== prevProps.succeededFetchUserData &&
      this.state.succeededFetchUserData) {
      this.setState({
        succeededFetchUserData: false,
      })
      message.success("Successfully fetch user data.")
    }
    if (this.state.succeededUpdateUserData !== prevProps.succeededUpdateUserData &&
      this.state.succeededUpdateUserData) {
      this.setState({
        succeededUpdateUserData: false,
      })
      message.success("Successfully added New user data.")
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
    const userListData = [...this.state.userListData];
    userListData.push(userData);
    this.setState({
      userListData: [...userListData],
      isSubmittedData: true,
    });
  }
  resetSubmittedData() {
    this.setState({
      isSubmittedData: false,
    })
  }
  getAllUserData() {
    this.setState({ isLoading: true, })
    const getUserData = getUserList();
    getUserData.then((data) => {
      if (data && data.length > 0) {
        this.setState({
          userListData: [...data.map(list => ({
            ...list,
          }))],
          succeededFetchUserData: true,
          isLoading: false,
        });
      }
    })
  }
  async getAllUserDataAsync() {
    this.setState({ isLoading: true, })
    const getUserData = await getUserList();
    if (getUserData && getUserData.length > 0) {
      this.setState({
        userListData: [...getUserData.map(list => ({
          ...list,
          userAddress: list.address && list.address.city,
          userCompany: list.company && list.company.name,
        }))],
        succeededFetchUserData: true,
      });
    }
    this.setState({ isLoading: false, })
  }
  async updateUserDataAsync(data) {
    this.setState({ isLoading: true, })
    const payload = {
      title: data.title,
      body: data.body,
      userId: 1,
    }
    const updatedUserData = await updatedUserPost(payload);
    if (updatedUserData) {
      const updateduserListData = [...this.state.userListData];
      updateduserListData.push(updatedUserData);
      this.setState({
        userListData: [...updateduserListData.map(list => ({
          ...list,
          fullName: list.name,
        }))],
        succeededUpdateUserData: true,
      });
    }
    this.setState({ isLoading: false, })
  }
  deleteUserListAction(userId) {
    let updatedUserList = [...this.state.userListData];
    updatedUserList = updatedUserList.filter(list => list.id !== userId);
    this.setState({
      userListData: [...updatedUserList],
    })
    message.success("User data deleted.");
  }
  updateSelectedUser() {
    let updatedUserList = [...this.state.userListData];
    let getUserIndex = updatedUserList.findIndex(list => list.id === this.state.selectedUserData.id);
    updatedUserList[getUserIndex] = this.state.selectedUserData;
    this.setState({
      userListData: [...updatedUserList],
    });
    message.success("User data updated.");
    this.userEditVisibilityAction();
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
    const { previewData,
      previewVisibility,
      isSubmittedData,
      isLoading,
      userEditVisibility,
    } = this.state;
    return (
      <div className="app-container">
        <Spin className="app-loading" indicator={antIcon} spinning={isLoading} />
        <Button onClick={this.getAllUserDataAsync}>Api Call</Button>
        {/* <UserFuncComponent
          submitAction={this.saveUserDataAction}
          isSubmittedData={isSubmittedData}
          resetSubmittedData={this.resetSubmittedData}
        /> */}
        <UserDataListComponent
          userListData={this.state.userListData}
          editUserListAction={this.userEditVisibilityAction}
          deleteUserListAction={this.deleteUserListAction}
          previewVisibilityAction={this.previewVisibilityAction}
        />
        {/* {previewVisibility &&
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
        } */}
      </div>
    );
  }
}

export default UserComponent;
