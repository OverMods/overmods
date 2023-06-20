import axios from "axios";

export const API_PATH = "http://localhost/overmods_app";
export const HTTP = axios.create({
   baseURL: API_PATH
});