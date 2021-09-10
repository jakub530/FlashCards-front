import { ADD_TERM, DELETE_TERM, FETCH_TERMS, FETCH_SESSION, GET_ID, TEST_API } from "./types";
import flashcards from "../api/flashcards";

export const testApi = () => async dispatch => {
  const response = await flashcards.post('/users',{name:"Jakub", email:"jakub@gmail.com", password:"test12345"})

  console.log("test 123")
  dispatch({type: TEST_API, payload: response.data})

}

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

export const fetchSession = (sessionId) => {

}








