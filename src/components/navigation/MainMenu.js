import React from 'react';
import {Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { testApi} from '../../actions';


class MainMenu extends React.Component {
  onClick = () => {
    console.log(this.props)
    this.props.testApi()
  }
  
  render() {
    return (
      <div className="mt-5">
        <div className="d-grid gap-2 col-6 mx-auto">
          <Link className="btn btn-primary" type="button" to="/sessions/session">Learning Sessions</Link>
          <Link className="btn btn-primary" type="button" to="/sets/create">Learning Sets</Link>
          <Link onClick={this.onClick} className="btn btn-primary" type="button" to="/">Settings</Link>
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

export default connect(mapStateToProps, { testApi })(MainMenu);