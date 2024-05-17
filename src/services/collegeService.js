import axios from "axios";

const baseURL = "http://localhost:2000";

export function getAllColleges() {
  const response = axios.get(`${baseURL}/college/all`);
  return response;
}
