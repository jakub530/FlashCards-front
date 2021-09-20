import { utilityService } from "./utility.service";

const fetchSessions = async () => {
  console.log("Fetching Sessions");
  const sessions = await utilityService.handleRequest("/session", "get");
  console.log("Fetched Sessions: ", sessions);
  return sessions;
};

const fetchSession = async (id) => {
  console.log("Fetching Session");
  const sessions = await utilityService.handleRequest(
    `/session/state/${id}`,
    "get"
  );
  console.log("Fetched Session Service: ", sessions);
  return sessions;
};

const evolveSession = async (id, update) => {
  console.log("Evolving Session", id, update);
  const sessions = await utilityService.handleRequest(
    `/session/evolve/${id}`,
    "post",
    { update }
  );
  console.log("Evolved Session: ", sessions);
  return sessions;
};

const createSession = async (data) => {
  console.log("Creating Session");
  console.log("Data:", data);
  const session = await utilityService.handleRequest(`/session`, "post", data);
  console.log("Created Session: ", session);
  return session;
};

export const sessionService = {
  fetchSessions,
  fetchSession,
  evolveSession,
  createSession,
};
