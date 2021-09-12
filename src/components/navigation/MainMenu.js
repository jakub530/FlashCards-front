import React from 'react';
import {Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { testApi} from '../../actions';

import { userActions } from '../../actions';

class MainMenu extends React.Component {
  componentDidMount() 
  {
    this.props.dispatch(userActions.getAll());
  }

  onClick = () => {
    console.log(this.props)
    this.props.testApi()
  }
  
  render() {
    return (
      <div className="mt-5">
        <div className="d-grid gap-2 col-6 mx-auto">
          <Link className="btn btn-primary" type="button" to="/sessions/session">Learning Sessions</Link>
          <Link className="btn btn-primary" type="button" to="/sets">Learning Sets</Link>
        </div>
      </div>
    ); 
  }
}

const mapStateToProps = (state) => {
  return { 
    state: state,
  }
}

export default connect(mapStateToProps)(MainMenu);