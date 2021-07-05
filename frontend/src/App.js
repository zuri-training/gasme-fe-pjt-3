import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./App.css";
import ContextProvider from "./assets/environ/ContextProvider";
import BecomeSeller from "./become-seller/BecomeSeller";

function App() {
  return (
    <BrowserRouter>
      <ContextProvider>
        <Switch>
          <Route exact path="/gasme-fe-pjt-3/become-seller" component={BecomeSeller} />
        </Switch>
      </ContextProvider>
    </BrowserRouter>
  );
}

export default App;
//after uninstall unneccesary things from package.json