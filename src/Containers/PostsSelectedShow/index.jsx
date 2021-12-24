import PostComponent from "./components";
import { useLocation, useNavigate, useParams, } from "react-router-dom";

const PostComponentWithRouter = () => {
    let getLocation = useLocation();
    let getNav = useNavigate();
    let getParam = useParams();
    return <PostComponent
        history={getLocation}
        navigate={getNav}
        urlParam={getParam}
    />;
};

export default PostComponentWithRouter;