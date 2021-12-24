import { Component } from "react";
import autoBind from "react-autobind";
import { getSelectedPost } from '../../Posts/api'
import '../style.scss';

class PostSelectComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      body: "",
    }
    autoBind(this);
  }
  componentDidMount() {
    if (this.props.urlParam && this.props.urlParam.id > 0) {
      this.getSelectedPostAction(this.props.urlParam.post_id)
    }
  }
  async getSelectedPostAction(postId) {
    const getData = await getSelectedPost(postId);
    if (getData) {
      this.setState({
        title: getData.title,
        body: getData.body,
      })
    }
  }
  render() {
    const {
      title,
      body,
    } = this.state;
    if (!(this.props.urlParam && this.props.urlParam.id)) {
      this.props.navigate("/");
      return "";
    }
    return (
      <div className="user-container">
        <button onClick={() => this.props.navigate("/")}>To Home</button>
        <h1>{title}</h1>
        <h1>{body}</h1>
      </div>
    );
  }
}

export default PostSelectComponent;
