import axios from "axios";
const baseUrl = "https://api.taiga.io/api/v1";
export const axiosClient = (method, path, data) => {
  return axios({ method, url: `${baseUrl}/${path}`, data });
};
