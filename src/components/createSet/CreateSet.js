import React from 'react';
import AddTerm from './AddTerm'
import NewTerm from './NewTerm';
import SetDetails from './SetDetails';

class CreateSet extends React.Component {
    
  render (){
    return (
      <div>
        <SetDetails></SetDetails>
        <AddTerm id="1"></AddTerm>
        <AddTerm id="2"></AddTerm>
        <AddTerm id="3"></AddTerm>
        <NewTerm></NewTerm>
        <div>
          <button className="float-end btn btn-primary btn-success">Save</button>
        </div>
      </div>
    );
  }
};

export default CreateSet;