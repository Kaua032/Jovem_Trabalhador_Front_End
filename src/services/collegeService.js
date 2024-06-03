import axios from "axios";
import Cookies from "js-cookie";

const baseURL = "http://localhost:2000";

export function getAllColleges() {
  const response = axios.get(`${baseURL}/college/all`);
  return response;
}

export function registerColleges(data) {
  const response = axios.post(`${baseURL}/college/register`, data, {
    headers: {
      Authorization: `Bearer ${Cookies.get("token")}`,
    },
  });

  return response;
}

export function getCollege(data) {
  const response = axios.post(`${baseURL}/college/find`, data, {
    headers: {
      Authorization: `Bearer ${Cookies.get("token")}`,
    },
  });

  return response;
}
