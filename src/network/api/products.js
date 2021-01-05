import axiosInstance from "../BaseUrl";

export const getProductsFromApi = async () => {
  return await axiosInstance.get("products");
};
