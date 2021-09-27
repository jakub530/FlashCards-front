import React from "react";
import "jquery";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

import { connect } from "react-redux";
import { Router, Route, Switch } from "react-router-dom";

import Alert from "react-bootstrap/Alert";

import SetCreate from "./sets/SetCreate";
import SetEdit from "./sets/SetEdit";
import SetList from "./sets/SetList";

import SessionCreate from "./sessions/SessionCreate";
import SessionItemList from "./sessions/SessionItemList";
import SessionList from "./sessions/SessionList";
import SessionTop from "./sessions/SessionTop";

import { alertActions } from "../actions";
import history from "../history";
import RouteRequiresLogin from "./auth/RouteRequiresLogin";

import Login from "./auth/Login";
import NavBar from "./navigation/NavBar";
import MainMenu from "./navigation/MainMenu";
import Register from "./auth/Register";

class App extends React.Component {
  constructor(props) {
    super(props);

    const { dispatch } = this.props;
    history.listen((location, action) => {
      // clear alert on location change
      dispatch(alertActions.clear());
    });
  }

  render() {
    const alert = this.props.alert;
    return (
      <div>
        <div className="container">
          <Router history={history}>
            <NavBar></NavBar>
            {alert.message && (
              <Alert className="mt-2" variant={alert.type}>
                {alert.message}
              </Alert>
            )}
            <Switch>
              <RouteRequiresLogin exact path="/">
                <MainMenu />
              </RouteRequiresLogin>
              <RouteRequiresLogin exact path="/sets">
                <SetList />
              </RouteRequiresLogin>
              <RouteRequiresLogin exact path="/sessions">
                <SessionList />
              </RouteRequiresLogin>
              <RouteRequiresLogin exact path="/sessions/create">
                <SessionCreate />
              </RouteRequiresLogin>
              <RouteRequiresLogin exact path="/sessions/main/view/:id">
                <SessionTop />
              </RouteRequiresLogin>
              <RouteRequiresLogin exact path="/sets/edit/:id">
                <SetEdit />
              </RouteRequiresLogin>
              <RouteRequiresLogin exact path="/sets/create">
                <SetCreate />
              </RouteRequiresLogin>
              <RouteRequiresLogin exact path="/sessions/main/items/:id">
                <SessionItemList />
              </RouteRequiresLogin>

              <Route path="/login" exact component={Login} />
              <Route path="/register" exact component={Register} />
            </Switch>
          </Router>
        </div>
      </div>
    );
  }
}

document.body.style = "background: #334756";

const mapStateToProps = (state) => {
  return {
    auth: state.auth,
    alert: state.alert,
  };
};

export default connect(mapStateToProps)(App);
