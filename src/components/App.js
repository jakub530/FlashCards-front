import React from "react";
import "jquery";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

import { connect } from "react-redux";

import SessionList from "./sessions/SessionList";
import SessionTop from "./sessions/SessionTop";
import SetEdit from "./sets/SetEdit";
import SetCreate from "./sets/SetCreate";
import MainMenu from "./navigation/MainMenu";
import SetList from "./sets/SetList";
import SessionCreate from "./sessions/SessionCreate";
// import Session from './sessions/SessionSplitter';
import Login from "./auth/Login";
import Register from "./auth/Register";
import history from "../history";
import { Router, Route, Switch } from "react-router-dom";
import NavBar from "./navigation/NavBar";
import RouteRequiresLogin from "./auth/RouteRequiresLogin";
import SessionItemList from "./sessions/SessionItemList";

class App extends React.Component {

  render(){
  return (
    <div>
      <div className="container">
        <Router history={history}>
          <NavBar></NavBar>
          <Switch>
            <RouteRequiresLogin exact path="/">
              <MainMenu/>
            </RouteRequiresLogin>
            <RouteRequiresLogin exact path="/sets">
              <SetList/>
            </RouteRequiresLogin>
            <RouteRequiresLogin exact path="/sessions">
              <SessionList/>
            </RouteRequiresLogin>
            <RouteRequiresLogin exact path="/sessions/create">
              <SessionCreate/>
            </RouteRequiresLogin>
            <RouteRequiresLogin exact path="/sessions/main/view/:id">
              <SessionTop/>
            </RouteRequiresLogin>
            <RouteRequiresLogin exact path="/sets/edit/:id">
              <SetEdit/>
            </RouteRequiresLogin>
            <RouteRequiresLogin exact path="/sets/create">
              <SetCreate/>
            </RouteRequiresLogin>
            <RouteRequiresLogin exact path="/sessions/main/items/:id">
              <SessionItemList/>
            </RouteRequiresLogin>
            
            <Route path="/login" exact component={Login} />
            <Route path="/register" exact component={Register} />
          </Switch>
        </Router>
      </div>
    </div>
  );
}
};

document.body.style = "background: #334756";

const mapStateToProps = (state) => {
  return {
    auth: state.auth,
  };
};

export default connect(mapStateToProps)(App);
