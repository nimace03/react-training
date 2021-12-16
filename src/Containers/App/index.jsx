import AppComponent from "./components";
import { useLocation, useNavigate, useParams } from "react-router-dom";

const AppComponentWithRouter = () => {
  let getLocation = useLocation();
  let getNav = useNavigate();
  let getParam = useParams();
  return <AppComponent history={getLocation} navigate={getNav} urlParam={getParam} />;
};

export default AppComponentWithRouter;