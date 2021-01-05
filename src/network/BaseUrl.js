import axios from "axios";
import * as Handlers from "./interceptors";

const axiosInstance = axios.create({
  baseURL: "https://fakestoreapi.com/",
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
