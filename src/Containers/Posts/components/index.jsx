import { Component } from "react";
import { Row, Col, Button, message } from "antd";
import autoBind from "react-autobind";
import PostListComponent from "./postList";
import { getPostList } from "../api";
import '../style.scss';

class UserComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      body: "",
      postList: [],
    }
    autoBind(this);
  }
  componentDidMount() {
    console.log(this.props)
    this.getPostListAction();
  }
  componentDidUpdate(prevProps) {
    if (this.props.isSucceededGetPostData !== prevProps.isSucceededGetPostData &&
      this.props.isSucceededGetPostData) {
      this.props.resetGetPostData();
      message.success("Successfully fetch post list.");
    }
  }
  handleClick() {
    const {
      title,
      body,
    } = this.state;
    this.props.submitAction({
      title,
      body,
    });
    this.setState({
      title: "",
      body: "",
    });
  }
  handleChange(field, value) {
    this.setState({
      [field]: value,
      isError: false,
    })
  }
  async getPostListAction() {
    const getData = await getPostList();
    if (getData && getData.length > 0) {
      this.props.succeededGetPostData(getData);
    }
  }
  render() {
    const {
      title,
      body,
      postList
    } = this.state;
    return (
      <div className="user-container">
        <Row gutter={[10, 10]}>
          <Col span={12}>
            <label className="user-label">Title </label>
          </Col>
          <Col span={12}>
            <input className="user-input" type="text" value={title} onChange={(event) => this.handleChange("title", event.target.value)} />
          </Col>
          <Col span={12}>
            <label className="user-label">body </label>
          </Col>
          <Col span={12}>
            <input className="user-input" type="text" value={body} onChange={(event) => this.handleChange("body", event.target.value)} />
          </Col>
          <Col span={24}>
            <Button
              type="primary"
              onClick={this.handleClick}
            >
              Submit
            </Button>
          </Col>
        </Row>
        <Button
          onClick={() => this.props.navigate("/", { state: { test: "state from post screen", title: this.state.title } })}
        >
          Click me to home page
        </Button>
        <label style={{ marginLeft: "20px" }} >App State Value : {this.props.AppName}</label>
        <PostListComponent
          postList={this.props.postDataList}
          navigate={this.props.navigate}
        />
      </div>
    );
  }
}

export default UserComponent;
