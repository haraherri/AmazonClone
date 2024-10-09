import axios from "axios";
import { BASE_URL } from "./constants";

const config = {
  header: {
    "Content-Type": "appication/json",
    Accept: "appication/json",
  },
};

export const callAPI = async (resource) => {
  const { data } = await axios.get(`${BASE_URL}/${resource}`, config);
  return data;
};
