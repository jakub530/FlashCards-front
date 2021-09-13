import { authToken } from '../utility';
import {connect} from '../api/flashcards'


const fetchSets = async () => {
  const sets = await handleRequest(`/sets`, "get")
  console.log("Fetched Sets Data: ", sets)
  return sets;
}

const fetchSet = async (id) => {

  const set = await handleRequest(`/sets/${id}`, "get")
  console.log("Fetched Set Data: ", set)
  return set;
}

const patchSet = async (id, set, cards) => {
  console.log("Patching Set")
  console.log(id)
  console.log(set)

  console.log(cards)
  await handleRequest(`/sets/${id}`, "patch", {set:{name:set.title, description:set.description},cards})

}

const handleRequest = async(endpoint, request_type, payload = null) =>
{
  let response
  

  if(authToken().Authorization)
  {
    const config = {
      headers: {'Authorization': authToken().Authorization}
    }
    try {
      switch(request_type) {
        case "get":
          response = await connect.get(endpoint, config)
          break;
        case "post":
          response = await connect.post(endpoint, payload, config)
          break;
        case "patch":
          response = await connect.patch(endpoint, payload, config)
          break;
        case "delete":
          response = await connect.delete(endpoint, config)
          break;
      }
      console.log(response);
      return response.data;
    } catch {
      console.log(response)
      return null;
    }
  }
  else
  {
    console.log("You are not logged in")
    return null;
  }
}


export const setService = {
    fetchSets,
    fetchSet,
    patchSet,
};

