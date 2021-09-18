import React from "react";
import "jquery";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

import SessionList from "./sessions/SessionList";
import SessionTop from "./sessions/SessionTop";
import SetEdit from "./sets/SetEdit";
import SetCreate from "./sets/SetCreate";
import MainMenu from "./navigation/MainMenu";
import SetList from "./sets/SetList";
import SessionCreate from "./sessions/SessionCreate";
// import Session from './sessions/SessionSplitter';
import Login from "./auth/Login";
import history from "../history";
import { Router, Route, Switch } from "react-router-dom";
import NavBar from "./navigation/NavBar";

const App = () => {
  return (
    <div className="container">
      <Router history={history}>
        <NavBar></NavBar>
        <Switch>
          <Route path="/" exact component={MainMenu} />
          <Route path="/sets" exact component={SetList} />
          {/* <Route path="/sessions/session" exact component={Session} /> */}
          <Route path="/sessions" exact component={SessionList} />
          <Route path="/sessions/create" exact component={SessionCreate} />
          <Route path="/sessions/main/view/:id" exact component={SessionTop} />
          <Route path="/login" exact component={Login} />
          <Route path="/sets/edit/:id" exact component={SetEdit} />
          <Route path="/sets/create" exact component={SetCreate} />
        </Switch>
      </Router>
    </div>
  );
};

document.body.style = "background: #ccc;";

export default App;
