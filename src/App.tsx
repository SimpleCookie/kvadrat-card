import { Card } from "./Card";
import { Home } from "./Home";
import {
  Switch,
  HashRouter as Router,
  Route,
} from "react-router-dom";

import './App.scss';

export const App = () => (
  <Router>
    <Switch>
      <Route exact path="/card/:name" component={Card} />
      <Route exact path="/" component={Home} />
    </Switch>
  </Router>
);
