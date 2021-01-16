import Iframe from "./components/iframe";
import InputLink from "./components/input-url";
import { HashRouter as Router, Switch, Route } from "react-router-dom";

export default function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <InputLink />
        </Route>
        <Route exact path="/compare">
          <Iframe />
        </Route>
      </Switch>
    </Router>
  );
}
