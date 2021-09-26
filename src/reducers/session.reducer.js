import { sessionConstants } from "../constants";

const init_state = {
  session: {},
};

export const session = (state = init_state, action) => {
  switch (action.type) {
    case sessionConstants.FETCH_SESSION:
      return { ...state, ...action.payload };
    case sessionConstants.EVOLVE_SESSION:
      return { ...action.payload };
    case sessionConstants.CREATE_SESSION:
      return { ...action.payload };
    default:
      return state;
  }
};
