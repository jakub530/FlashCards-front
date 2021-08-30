import { ADD_TERM, DELETE_TERM, FETCH_TERMS, GET_ID } from "./types";


export const addTerm = (termId) => {
  return {
    type: ADD_TERM,
    payload: termId
  }
}

export const deleteTerm = (termId) => {
  return {
    type: DELETE_TERM,
    payload: termId
  }
}

export const fetchTerms = () => {
  return {
    type: FETCH_TERMS,
  }
}

export const getId = () => {
  return {
    type: GET_ID,
  }
}






