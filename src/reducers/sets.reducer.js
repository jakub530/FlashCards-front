import { setConstants } from '../constants';
import _ from 'lodash';

const init_state = {

}

export const sets = (state = init_state, action) => {
  switch (action.type) {
    case setConstants.LIST_SETS:
      console.log("Reached action")
      return { ...state, ..._.mapKeys(action.payload, '_id')}
    default:
      return state;
  }
}