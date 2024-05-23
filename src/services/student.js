import axios from "axios";
import Cookies from "js-cookie";

const baseURL = "http://localhost:2000";

export function getAllStudentsByPage(data) {
  const response = axios.post(`${baseURL}/student/all`, data);

  return response;
}

export function getAllStudentsBySearch(data) {
  const response = axios.post(`${baseURL}/student/search`, data);

  return response;
}

export function postAllStudents(data) {
  const response = axios.post(`${baseURL}/student/register`, data, {
    headers: {
      Authorization: `Bearer ${Cookies.get("token")}`,
    },
  });

  return response;
}
