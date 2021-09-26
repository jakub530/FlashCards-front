import { sessionConstants } from "../constants";

const init_state = [];

export const sessionCard = (state = init_state, action) => {
  switch (action.type) {
    case sessionConstants.FIND_ALL_SESSION_CARDS:
      return [...action.payload];
    default:
      return state;
  }
};
