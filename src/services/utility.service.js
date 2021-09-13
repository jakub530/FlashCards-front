import { authToken } from '../utility';
import {connect} from '../api/flashcards';


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
      console.log("Request reqsponse:", response);
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

export const utilityService = {
    handleRequest
}