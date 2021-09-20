import { sessionConstants } from "../constants";
import _ from "lodash";
import { createReducer } from "@reduxjs/toolkit";

const init_state = {
  session: {},
};

// export const session = createReducer(init_state, (builder) => {
//     builder.addCase(sessionConstants.FETCH_SESSION, (state, action) => {
//         state = action.payload
//     }).addCase()
// })

export const session = (state = init_state, action) => {
  switch (action.type) {
    case sessionConstants.FETCH_SESSION:
      console.log("Reached fetch action");
      return { ...state, ...action.payload };
    case sessionConstants.EVOLVE_SESSION:
      console.log("Evolve Session");
      return { ...action.payload };
    case sessionConstants.CREATE_SESSION:
      console.log("Created Session");
      return { ...action.payload };
    default:
      return state;
  }
};
