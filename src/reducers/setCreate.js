import {ADD_TERM, DELETE_TERM, FETCH_TERMS, GET_ID, TEST_API} from '../actions/types';
import _ from 'lodash';

const init_state = {terms:[
  {id:1},
  {id:2},
  {id:3},
], lastId:3, response:null}

export default (state = init_state, action) => {
  switch (action.type) {
    case TEST_API:
      return {...state, response:action.payload}
    case FETCH_TERMS:
      return {...state}
    case ADD_TERM:
      return {...state, lastId:state.lastId+1, terms:[...state.terms,{id:state.lastId+1}]}
    case DELETE_TERM:
      console.log("Payload id" , action.payload)
      return {...state, terms:state.terms.filter(el => el.id !== action.payload)}
    default:
      return state;
  }
}