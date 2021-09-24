import { sessionConstants } from "../constants";
import { sessionService } from "../services";

// const listSets = () => async (dispatch, getState) => {
//     const sets = await setService.getSets()
//     console.log(sets)
//     dispatch({type: setConstants.LIST_SETS,payload:sets})
//   }

const findAllSessionCards = (id) => async (dispatch) => {
  const sessionCards = await sessionService.fetchSessionCards(id);
  //   console.log("Fetched Session Action:", session);
  dispatch({
    type: sessionConstants.FIND_ALL_SESSION_CARDS,
    payload: sessionCards,
  });
};

export const sessionCardActions = {
  findAllSessionCards,
};
