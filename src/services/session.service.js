import {utilityService} from "./utility.service";

const fetchSessions = async () => {
  console.log("Fetching Session")
  const sessions = await utilityService.handleRequest("/session", "get")
  console.log("Fetched Sessions: ", sessions)
  return sessions;
}


export const sessionService = {
    fetchSessions,
};

