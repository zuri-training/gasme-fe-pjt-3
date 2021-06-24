import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./App.css";
import CreateAccount from "./create-account/CreateAccount";
import Main from "./landing/Main";
import Login from "./login/Login";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/gasme-fe-pjt-3" component={Main} />
        <Route exact path="/gasme-fe-pjt-3/login" component={Login} />
        <Route exact path="/gasme-fe-pjt-3/create-account" component={CreateAccount} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
