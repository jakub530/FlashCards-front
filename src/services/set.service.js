import { utilityService } from "./utility.service";

const fetchSets = async () => {
  const sets = await utilityService.handleRequest(`/sets`, "get");
  console.log("Fetched Sets Data: ", sets);
  return sets;
};

const fetchSet = async (id) => {
  const set = await utilityService.handleRequest(`/sets/${id}`, "get");
  console.log("Fetched Set Data: ", set);
  return set;
};

const patchSet = async (id, set, cards) => {
  console.log("Patching Set");
  console.log(id);
  console.log(set);

  console.log(cards);
  await utilityService.handleRequest(`/sets/${id}`, "patch", {
    set: { name: set.title, description: set.description },
    cards,
  });
};

const createSet = async (id, set, cards) => {
  console.log("Creating Set");
  console.log(id);
  console.log(set);
  console.log(cards);
  await utilityService.handleRequest(`/sets`, "post", {
    set: { name: set.title, description: set.description, _id: id },
    cards,
  });
};

const deleteSet = async (id) => {
  console.log("Deleting Set");

  await utilityService.handleRequest(`/sets/${id}`, "delete");
};

export const setService = {
  fetchSets,
  fetchSet,
  patchSet,
  createSet,
  deleteSet,
};
