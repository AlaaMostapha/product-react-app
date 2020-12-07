import axiosInstance from "../BaseUrl";
import * as Handlers from "../handlers/products";
export const getProductsFromApi = async () => {
  return await axiosInstance.get("products");
};

//interceptors
axiosInstance.interceptors.request.use((request) =>
  Handlers.handleRequest(request)
);
axiosInstance.interceptors.response.use(
  (response) => Handlers.handleResponse(response),
  (error) => Handlers.handleError(error)
);
