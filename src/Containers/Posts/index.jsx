import PostComponent from "./components";
import { useLocation, useNavigate, } from "react-router-dom";

const PostComponentWithRouter = () => {
    let getLocation = useLocation();
    let getNav = useNavigate();
    return <PostComponent history={getLocation} navigate={getNav} />;
};

export default PostComponentWithRouter;