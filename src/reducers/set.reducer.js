import { setConstants } from "../constants";

const init_state = {};

export const set = (state = init_state, action) => {
  switch (action.type) {
    case setConstants.FETCH_SET:
      return action.payload;
    default:
      return state;
  }
};
