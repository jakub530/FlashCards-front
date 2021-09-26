import { utilityService } from "./utility.service";

const fetchSets = async () => {
  const sets = await utilityService.handleRequest(`/sets`, "get");
  return sets;
};

const fetchSet = async (id) => {
  const set = await utilityService.handleRequest(`/sets/${id}`, "get");
  return set;
};

const patchSet = async (id, set, cards) => {
  await utilityService.handleRequest(`/sets/${id}`, "patch", {
    set: { name: set.title, description: set.description },
    cards,
  });
};

const createSet = async (id, set, cards) => {
  await utilityService.handleRequest(`/sets`, "post", {
    set: { name: set.title, description: set.description, _id: id },
    cards,
  });
};

const deleteSet = async (id) => {
  await utilityService.handleRequest(`/sets/${id}`, "delete");
};

export const setService = {
  fetchSets,
  fetchSet,
  patchSet,
  createSet,
  deleteSet,
};
