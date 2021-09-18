import {utilityService} from "./utility.service";

const fetchSessions = async () => {
  console.log("Fetching Sessions")
  const sessions = await utilityService.handleRequest("/session", "get")
  console.log("Fetched Sessions: ", sessions)
  return sessions;
}

const fetchSession = async (id) => {
    console.log("Fetching Session")
    const sessions = await utilityService.handleRequest(`/session/state/${id}`, "get")
    console.log("Fetched Session Service: ", sessions)
    return sessions;
  }

  const evolveSession = async (id, update) => {
    console.log("Evolving Session")
    const sessions = await utilityService.handleRequest(`/session/evolve/${id}`, "post", {update})
    console.log("Evolved Session: ", sessions)
    return sessions;
  }

export const sessionService = {
    fetchSessions,
    fetchSession,
    evolveSession
};

