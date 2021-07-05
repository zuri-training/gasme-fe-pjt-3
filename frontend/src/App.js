import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./App.css";
import ContextProvider from "./assets/environ/ContextProvider";
import BecomeSeller from "./become-seller/BecomeSeller";
import CustomerMessage from "./customer-message/CustomerMessage";
import CustomerNotification from "./customer-notification/CustomerNotification";
import CustomerSetting from "./customer-setting/CustomerSetting";

function App() {
  return (
    <BrowserRouter>
      <ContextProvider>
        <Switch>
          <Route
            exact
            path="/gasme-fe-pjt-3/become-seller"
            component={BecomeSeller}
          />
          <Route
            exact
            path="/gasme-fe-pjt-3/customer-message"
            component={CustomerMessage}
          />
          <Route
            exact
            path="/gasme-fe-pjt-3/customer-notification"
            component={CustomerNotification}
          />
          <Route
            exact
            path="/gasme-fe-pjt-3/customer-setting"
            component={CustomerSetting}
          />
        </Switch>
      </ContextProvider>
    </BrowserRouter>
  );
}

export default App;
//after uninstall unneccesary things from package.json
