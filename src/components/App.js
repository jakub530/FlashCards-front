import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap-icons/font/bootstrap-icons.css";
import CreateSet from './createSet/CreateSet';
import MainMenu from './navigation/MainMenu';
import Session from './sessions/Session';
import history from '../history';
import { Router, Route, Switch } from 'react-router-dom';

const App = () => {
  return (
    <div className="container" >
      <Router history={history}>
        <Switch>
          <Route path="/" exact component={MainMenu} />
          <Route path="/sessions/session" exact component={Session} />
          <Route path="/sets/create" eact component={CreateSet} /> 
        </Switch>
      </Router>

    </div>
  );
}

document.body.style = 'background: #ccc;';

export default App;