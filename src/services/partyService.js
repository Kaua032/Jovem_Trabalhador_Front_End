import axios from "axios";
import Cookies from "js-cookie";

const baseURL = "http://localhost:2000";

export function getAllPartys() {
  const response = axios.get(`${baseURL}/party/all`);
  return response;
}

export function registerPartys(data) {
  const response = axios.post(`${baseURL}/party/register`, data, {
    headers: {
      Authorization: `Bearer ${Cookies.get("token")}`,
    },
  });

  return response;
}
