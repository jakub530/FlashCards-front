import { authToken } from "../utility";
import { connect } from "../api/flashcards";

const handleRequest = async (endpoint, request_type, payload = null, token = true) => {
  let response;
  if (process.env.NODE_ENV === "development") {
    console.log("Sending Request");
    console.log("Endpoint:", endpoint);
    console.log("Request Type:", request_type);
    console.log("Payload:", payload);
  }
  if (authToken().Authorization || !token) {
    let config
    if(token) {
      config = {
        headers: { Authorization: authToken().Authorization },
      };
    } else {
      config = null;
    }

    try {
      switch (request_type) {
        case "get":
          response = await connect.get(endpoint, config);
          break;
        case "post":
          response = await connect.post(endpoint, payload, config);
          break;
        case "patch":
          response = await connect.patch(endpoint, payload, config);
          break;
        case "delete":
          response = await connect.delete(endpoint, config);
          break;
        default:
          break;
      }
      if (process.env.NODE_ENV === "development") {
        console.log("Received Response:", response);
      }
      return response.data;
    } catch (error) {
      console.log("Caught error", error);
      return error;
    }
  } else {
    console.log("You are not logged in");
    return null;
  }
};

export const utilityService = {
  handleRequest,
};
