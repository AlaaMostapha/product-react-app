import axiosInstance from '../login';

const users ="users";

export const requestUsersFromApi = async() =>{
   return await axiosInstance.get(users)
}

