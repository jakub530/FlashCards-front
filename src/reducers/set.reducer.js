import { setConstants } from '../constants';
import _ from 'lodash';

const init_state = {
}

export const set = (state = init_state, action) => {
  switch (action.type) {
    case setConstants.FETCH_SET:
      console.log("Reached fetch action")
      return action.payload
    // case setConstants.CREATE_TERM:
    //     return 
    default:
      return state;
  }
}