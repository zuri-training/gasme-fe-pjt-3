import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./App.css";
import "./icons/icons.js"
import ContextProvider from "./assets/environ/ContextProvider";
import CreateAccount from "./create-account/CreateAccount";
import Main from "./landing/Main";
import Login from "./login/Login";
import Ss from "./seller setting.js"
import Cn from "./customer notification.js"
import Cm from "./customer messages.js"
import Bas from "./BAS.js"

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
            path="/gasme-fe-pjt-3/customer-messages"
            component={Cm}
          />
          <Route
            exact
            path="/gasme-fe-pjt-3/customer-notification"
            component={Cn}
          />
          <Route
            exact
            path="/gasme-fe-pjt-3/become-a-seller"
            component={Bas}
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
