import axiosInstance from '../products';

const products ="products/";

export const getSingleProductFromApi = async(id) =>{
   return await axiosInstance.get(products+id)
}

