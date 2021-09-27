import { sessionConstants } from "../constants";
import { sessionService } from "../services";

const findAllSessionCards = (id) => async (dispatch) => {
  const sessionCards = await sessionService.fetchSessionCards(id);
  dispatch({
    type: sessionConstants.FIND_ALL_SESSION_CARDS,
    payload: sessionCards,
  });
};

export const sessionCardActions = {
  findAllSessionCards,
};
