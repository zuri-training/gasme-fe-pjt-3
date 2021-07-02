import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./App.css";
import "./icons/icons.js"
import ContextProvider from "./assets/environ/ContextProvider";
import CreateAccount from "./create-account/CreateAccount";
import Main from "./landing/Main";
import Login from "./login/Login";
import Sd from "./seller dashboard.js"
import Cd from "./customer dashboard.js"
import Ss from "./seller setting.js"
import Cn from "./customer notification.js"

function App() {
  return (
    <BrowserRouter>
      <ContextProvider>
        <Switch>
          <Route exact path="/gasme-fe-pjt-3" component={Main} />
          <Route exact path="/gasme-fe-pjt-3/login" component={Login} />
          <Route
            exact
            path="/gasme-fe-pjt-3/create-account"
            component={CreateAccount}
          />
          <Route
            exact
            path="/gasme-fe-pjt-3/customer-dashboard"
            component={Cd}
          />
          <Route
            exact
            path="/gasme-fe-pjt-3/customer-notification"
            component={Cn}
          />
          <Route
            exact
            path="/gasme-fe-pjt-3/seller-dashboard"
            component={Sd}
          />
          <Route
            exact
            path="/gasme-fe-pjt-3/seller-settings"
            component={Ss}
          />
        </Switch>
      </ContextProvider>
    </BrowserRouter>
  );
}

export default App;
