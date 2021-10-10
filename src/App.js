import React from "react";
import Pizza from "./Pizza";
import viewCart from "./Pizza/viewCart";
import "./App.css"
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import { NotificationContainer } from 'react-notifications';


class App extends React.Component {
  render() {
    return (
      <div>
        <NotificationContainer />
        <Router>
          <div>
            <Switch>
              <Route exact path="/" component={Pizza} />
              <Route path="/viewCart" component={viewCart} />
            </Switch>
          </div>
        </Router>
      </div>
    )
  }
}
export default App