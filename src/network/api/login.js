import axiosInstance from "../login";

export const requestUsersFromApi = async () => {
  return await axiosInstance.get("users");
};
