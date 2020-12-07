import axios from "axios";
import * as Handlers from "./handlers/login";

const axiosInstance = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com/",
});

//interceptors
axiosInstance.interceptors.request.use((request) =>
  Handlers.handleRequest(request)
);
axiosInstance.interceptors.response.use(
  (response) => Handlers.handleResponse(response),
  (error) => Handlers.handleError(error)
);

export default axiosInstance;
