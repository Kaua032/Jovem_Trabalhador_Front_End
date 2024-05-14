import axios from "axios";

const baseURL = "http://localhost:2000";

export function signin(data) {
  const response = axios.post(`${baseURL}/user/login`, data);
  return response;
}
