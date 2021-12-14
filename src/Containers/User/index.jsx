import UserComponent from "./components";
import { useLocation, useNavigate } from "react-router-dom";

const UserComponentWithRouter = () => {
    let getLocation = useLocation();
    let getNav = useNavigate();
    return <UserComponent history={getLocation} navigate={getNav} />;
};

export default UserComponentWithRouter;