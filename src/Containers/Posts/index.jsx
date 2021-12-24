import PostComponent from "./components";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { connect } from "react-redux";

import {
    succeededGetPostData,
    resetGetPostData,
} from "./action";

const PostComponentWithRouter = (props) => {
    let getLocation = useLocation();
    let getNav = useNavigate();
    let getParam = useParams();
    return <PostComponent
        history={getLocation}
        navigate={getNav}
        urlParam={getParam}
        {...props}
    />;
};
const mapStateToProps = ({ app, post }) => ({
    AppName: app.AppName,
    AppName2: app.AppName2,

    // Post State
    postDataList: post.postDataList,
    isSucceededGetPostData: post.succeededGetPostData,
})

const mapDispatchToProps = {
    succeededGetPostData,
    resetGetPostData,
}

export default connect(mapStateToProps, mapDispatchToProps)(PostComponentWithRouter);