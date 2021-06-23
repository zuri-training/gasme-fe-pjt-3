import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./App.css";
import Login from "./login/Login";
import Main from "./landing/Main";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Main} />
        <Route exact path="/login" component={Login} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
