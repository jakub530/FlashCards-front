import React from 'react';
import {colors} from './utility';
import './Session.css';


class Session extends React.Component {

  input = 7;

  renderButtons (input){
    return colors(input).map((term,index) => {
      return (
        <button type="button" className={`btn custom-button custom-button-${term}`} style={{backgroundcolor:{term}}}>{index+1}</button>
      );
    })
  }


  render() {
    return (
      <div className="mt-5 d-flex">
        <div className="btn-group mx-auto">
          {this.renderButtons(this.input)}
        </div>
      </div>
    );
  };
}


export default Session;