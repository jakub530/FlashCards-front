import React from 'react';

import { connect } from 'react-redux';
import SetCard from './SetCard';



import { setsActions } from '../../actions';


class SetList extends React.Component {
  componentDidMount() 
  {

    this.props.dispatch(setsActions.listSets());
    console.log("Setlist sets", this.props.sets)
  }


//   componentDidUpdate() 
//   {

//     this.props.dispatch(setActions.listSets());
//     console.log("Setlist sets", this.props.sets)
//   }


  renderSets = () => {
    return this.props.sets.map(set => {
      return (
        <SetCard title={set.name} description={set.description} id={set._id}></SetCard>
      );
    })
  }

    
  render (){
    return (
        <div>
            {this.props.sets? this.renderSets() : "No sets to show"}

        </div>
    );
  }
};


const mapStateToProps = (state) => {
    return { 
        sets: Object.values(state.sets),
    }
  }


export default connect(mapStateToProps)(SetList);