// import { method } from "lodash";

const getFromAPI = async (link) => {
  const fetchedData = await fetch(link);
  return fetchedData.json();
};

export default getFromAPI;