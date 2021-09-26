import { setConstants } from "../constants";

const init_state = {};

export const set = (state = init_state, action) => {
  switch (action.type) {
    case setConstants.FETCH_SET:
      console.log("Reached fetch action");
      return action.payload;
    default:
      return state;
  }
};
