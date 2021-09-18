import React from 'react';

import { connect } from 'react-redux';
import './Session.css';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
// import FloatingLabel from 'react-bootstrap/FloatingLabel'
import { sessionService } from '../../services';
import { sessionActions } from '../../actions';
import SessionMain from './SessionMain';
import SessionSplitter from './SessionSplitter';
import SessionDebug from './SessionDebug';

class SessionTop extends React.Component {

    constructor(props){
        super(props);
        this.state = { init:false};
      }

    componentDidMount() {
        this.props.fetchSession(this.props.match.params.id);  
    }

    componentDidUpdate() {
        console.log("Update component session top", this.props.session)
        if(!this.state.init && this.props.session.state )
        {
            this.setState({init:true})
        }
    }

    


//   render() {  
//     return (
//         <div>
//             {this.state.init ? <SessionMain/> : <div>Waiting For Data</div>}
//             Session Top
//         </div>
//     );
//   };

  render (){
    return (
      <div>
        {this.state.init ? <SessionSplitter/> : "Loading"}
        {this.state.init ? <SessionMain/> : "Loading"}
        <SessionDebug></SessionDebug>

      </div>
    );
  }
}


const mapStateToProps = (state) => {
  return { 
    session: state.session.session.session,
  }
}

export default connect(mapStateToProps, {fetchSession:sessionActions.fetchSession})(SessionTop);