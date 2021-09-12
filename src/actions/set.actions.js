import { setConstants } from '../constants';
import { setService } from "../services";

// const listSets = () => async (dispatch, getState) => {
//     const sets = await setService.getSets()
//     console.log(sets)
//     dispatch({type: setConstants.LIST_SETS,payload:sets})
//   }
  
const fetchSet = (id) => async dispatch => {
    const set = await setService.fetchSet(id)
    console.log("Fetched Set:", set)
    dispatch({type: setConstants.FETCH_SET,payload:set})
}

// const addTerm = (termId) => {
//     return {
//       type: setConstants.ADD_TERM,
//       payload: termId
//     }
//   }
  
// const deleteTerm = (termId) => {
//     return {
//       type: setConstants.DELETE_TERM,
//       payload: termId
//     }
//   }

//   const fetchTerms = () => {
//     return {
//       type: setConstants.FETCH_TERMS,
//     }
//   }
  
// const getId = () => {
//     return {
//       type: setConstants.GET_ID,
//     }
//   }
  
// const fetchSession = (sessionId) => {
  
//   }

  
export const setActions = {
    fetchSet,
}
    
    