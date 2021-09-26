import { utilityService } from "./utility.service";

const fetchSessions = async () => {
  const sessions = await utilityService.handleRequest("/session", "get");
  return sessions;
};

const fetchSession = async (id) => {
  const sessions = await utilityService.handleRequest(
    `/session/state/${id}`,
    "get"
  );
  return sessions;
};

const evolveSession = async (id, update) => {
  const sessions = await utilityService.handleRequest(
    `/session/evolve/${id}`,
    "post",
    { update }
  );
  return sessions;
};

const createSession = async (data) => {
  const session = await utilityService.handleRequest(`/session`, "post", data);
  return session;
};

const deleteSession = async (id) => {
  const session = await utilityService.handleRequest(
    `/session/${id}`,
    "delete"
  );
  return session;
};

const fetchSessionCards = async (id) => {
  const sessionCards = await utilityService.handleRequest(
    `/session/cards/${id}`,
    "get"
  );
  return sessionCards;
};

export const sessionService = {
  fetchSessions,
  fetchSession,
  evolveSession,
  createSession,
  deleteSession,
  fetchSessionCards,
};
