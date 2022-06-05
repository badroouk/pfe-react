import axios from "axios";
// config
import {API_HOST_KEY } from "../config";

// TODO: find a way to get language from the browser
// const lang = window.navigator.language.split("-")[0];
const lang = "en";

const axiosInstance = axios.create({
  baseURL: API_HOST_KEY,
});


axiosInstance.interceptors.response.use(
  (response) => response,
  (error) =>
    Promise.reject(
      (error.response && error.response.data) ||
        "Something went wrong when calling DST API"
    )
);

export { axiosInstance };