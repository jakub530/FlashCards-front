import React from 'react';
import 'jquery'
import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap-icons/font/bootstrap-icons.css";

import SetEdit from './sets/SetEdit';
import MainMenu from './navigation/MainMenu';
import SetList from './sets/SetList';
import Session from './sessions/Session';
import Login from './auth/Login'
import history from '../history';
import { Router, Route, Switch } from 'react-router-dom';
import NavBar from './navigation/NavBar';

const App = () => {
  return (
    <div className="container" >
      <Router history={history}>
      <NavBar></NavBar>
        <Switch>
          <Route path="/" exact component={MainMenu} />
          <Route path="/sets" exact component={SetList} />
          <Route path="/sessions/session" exact component={Session} />
          <Route path="/login" exact component={Login} />
          <Route path="/sets/edit/:id" exact component={SetEdit} />
        </Switch>
      </Router>

    </div>
  );
}

document.body.style = 'background: #ccc;';

export default App;