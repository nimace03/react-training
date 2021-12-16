import { Component } from "react";
import autoBind from "react-autobind";
import { getSelectedPost } from '../../Posts/api'
import '../style.scss';

class UserComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      body: "",
    }
    autoBind(this);
  }
  componentDidMount() {
    console.log(this.props.urlParam.id);
    if (this.props.urlParam && this.props.urlParam.id) {
      this.getSelectedPostAction(this.props.urlParam.id)
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
    return (
      <div className="user-container">
        <h1>{title}</h1>
        <h1>{body}</h1>
      </div>
    );
  }
}

export default UserComponent;
