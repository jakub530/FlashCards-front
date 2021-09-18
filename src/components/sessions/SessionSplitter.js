import React from 'react';
import { utility } from './utility';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { connect } from 'react-redux';
import './Session.css';


class SessionSplitter extends React.Component {

  getValue = () => {
    return 4;
  }

  renderColors (input){
    console.log("Session splitter", this.props)
    if(!this.props.session.state)
    {
      return (
        <div>
          No buckets
        </div>
      )
    }

    const buckets = this.props.session.state.bucketLevels

    return utility.colors(buckets.length).map((term,index) => {
      return (
        <Col 
          className={index!==this.props.session.state.currentBucket ? 
          "text-center font-weight-bold border" : 
          "text-center font-weight-bold border border-dark"} 
          style={{backgroundColor:term, color:"white"}}>
          {buckets[index]}
        </Col>
      );
    })
  }


  render() {
    return (
      <Container className="d-flex justify-content-center" style={{height:"50px"}}>
        <Row className="w-50 align-items-center" >
          {this.renderColors(this.input)}
        </Row>
      </Container>

    );
  };
}


const mapStateToProps = (state) => {
  return { 
    session: state.session.session.session,
  }
}

export default connect(mapStateToProps)(SessionSplitter);