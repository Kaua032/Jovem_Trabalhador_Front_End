import axios from "axios";
import Cookies from "js-cookie";

const baseURL = "http://localhost:2000";

export function getAllCourses() {
  const response = axios.get(`${baseURL}/course/all`);
  return response;
}

export function registerCourses(data) {
  const response = axios.post(`${baseURL}/course/register`, data, {
    headers: {
      Authorization: `Bearer ${Cookies.get("token")}`,
    },
  });

  return response;
}
