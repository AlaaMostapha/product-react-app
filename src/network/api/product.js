import axiosInstance from "../BaseUrl";

export const getSingleProductFromApi = async (id) => {
  return await axiosInstance.get("products/" + id);
};
