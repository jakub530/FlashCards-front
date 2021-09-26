import { sessionConstants } from "../constants";
import { sessionService } from "../services";

const fetchSession = (id) => async (dispatch) => {
  const session = await sessionService.fetchSession(id);
  dispatch({ type: sessionConstants.FETCH_SESSION, payload: session });
};

const evolveSession = (id, update) => async (dispatch) => {
  const session = await sessionService.evolveSession(id, update);
  dispatch({ type: sessionConstants.EVOLVE_SESSION, payload: session });
};

const createSession = (data) => async (dispatch) => {
  const session = await sessionService.createSession(data);
  dispatch({ type: sessionConstants.CREATE_SESSION, payload: session });
  return session;
};

export const sessionActions = {
  fetchSession,
  evolveSession,
  createSession,
};
