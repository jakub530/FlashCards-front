import { sessionConstants } from "../constants";
import { sessionService } from "../services";

// const listSets = () => async (dispatch, getState) => {
//     const sets = await setService.getSets()
//     console.log(sets)
//     dispatch({type: setConstants.LIST_SETS,payload:sets})
//   }

const fetchSession = (id) => async (dispatch) => {
  const session = await sessionService.fetchSession(id);
  console.log("Fetched Session Action:", session);
  dispatch({ type: sessionConstants.FETCH_SESSION, payload: session });
};

const evolveSession = (id, update) => async (dispatch) => {
  const session = await sessionService.evolveSession(id, update);
  console.log("Evolved Session Action:", session);
  dispatch({ type: sessionConstants.EVOLVE_SESSION, payload: session });
};

const createSession = (data) => async (dispatch) => {
  const session = await sessionService.createSession(data);
  console.log("Created Session:", session);
  dispatch({ type: sessionConstants.CREATE_SESSION, payload: session });
  return session;
};

export const sessionActions = {
  fetchSession,
  evolveSession,
  createSession,
};
