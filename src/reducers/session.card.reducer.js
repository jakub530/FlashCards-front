import { sessionConstants } from "../constants";
import _ from "lodash";

const init_state = [];

export const sessionCard = (state = init_state, action) => {
  switch (action.type) {
    case sessionConstants.FIND_ALL_SESSION_CARDS:
      console.log("All session card reducer");
      return [...action.payload];
    default:
      return state;
  }
};
