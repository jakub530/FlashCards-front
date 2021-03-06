import React from "react";
import { Route } from "react-router-dom";
import { connect } from "react-redux";
import Login from "./Login";

const RouteRequiresLogin = (props) => {
  const userIsLogged = props.auth.loggedIn;
  return (
    <Route {...props}>
      {userIsLogged ? (
        React.cloneElement(props.children, {
          idAdress: props.computedMatch.params.id,
        })
      ) : (
        <Login noRedirect={true} />
      )}
    </Route>
  );
};

const mapStateToProps = (state) => {
  return {
    auth: state.auth,
  };
};

export default connect(mapStateToProps)(RouteRequiresLogin);
