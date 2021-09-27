import { alertConstants } from "../constants";

export function alertCard(state = {type:"default", message:"Type your answer"}, action) {
  switch (action.type) {
    case alertConstants.SUCCESS_CARD:
      return {
        type: "success",
        message: action.message,
      };
    case alertConstants.ERROR_CARD:
      return {
        type: "danger",
        message: action.message,
      };
    case alertConstants.CLEAR_CARD:
      return {
          type:"default",
          message:"Type your answer"
      };
    default:
      return state;
  }
}
