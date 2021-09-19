import React from 'react';
import SetForm from './SetForm';



class SetEdit extends React.Component {
  
  render (){
    return (
      <SetForm 
        fetchData={true}
        submit="patch"
        id={this.props.match.params.id}
      />
    );
  }
};

export default SetEdit;