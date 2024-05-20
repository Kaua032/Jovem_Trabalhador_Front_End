import axios from "axios";

const baseURL = "http://localhost:2000";

export function getAllStudentsByPage(data) {
  const response = axios.post(`${baseURL}/student/all`, data);

  return response;
}

export function getAllStudentsBySearch(data) {
  const response = axios.post(`${baseURL}/student/search`, data);

  return response;
}
