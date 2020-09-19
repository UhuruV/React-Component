import React from 'react';
import './App.css';
import HomePage from './Components/HomePage'
import Login from './Components/Login'
import Users from './Components/users'
import Contact from './Components/Contact'
import NotFound from './Components/Notfound'
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";
import Registration from './Components/Registration';
import { createBrowserHistory } from "history";

const history = createBrowserHistory();

function App() {
  return (
      <Router history={history}>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/users" component={Users} />
        <Route path="/contact" component={Contact} />
          <Route path="/register" component={Registration} />
          <Route path="/login" component={Login} />
        <Route component={NotFound} />
      </Switch>
      </Router>
  );
}

export default App;
