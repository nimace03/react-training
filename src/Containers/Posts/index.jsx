import { Component } from "react";
import { Row, Col, Button } from "antd";
import autoBind from "react-autobind";
import PostListComponent from "./postList";
import './style.scss';

class UserComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      body: "",
    }
    autoBind(this);
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
  render() {
    const {
      title,
      body,
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
        <hr />
        <PostListComponent />
      </div>
    );
  }
}

export default UserComponent;
