import AppComponent from "./components";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { connect } from 'react-redux';
import { TestAction } from "./action"
const AppComponentWithRouter = (props) => {
  const getLocation = useLocation();
  const getNav = useNavigate();
  const getParam = useParams();
  return <AppComponent
    history={getLocation}
    navigate={getNav}
    urlParam={getParam}
    {...props}
  />;
};

const mapStateToProps = ({ app }) => ({
  AppName: app.AppName,
  AppName2: app.AppName2,
})

const mapDispatchToProps = {
  TestAction,
}

export default connect(mapStateToProps, mapDispatchToProps)(AppComponentWithRouter);