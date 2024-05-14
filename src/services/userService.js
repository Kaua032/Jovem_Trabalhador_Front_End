import axios from "axios";
import Cookies from "js-cookie";

const baseURL = "http://localhost:2000"

export function signin(data) {
    const response = axios.post(`${baseURL}/user/login`, data, {
        headers: {
            Authorization: `Bearer ${Cookies.get("token")}`
        }
    })
    return response
}