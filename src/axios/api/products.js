import axiosInstance from '../products';

const products ="products";

export const getProductsFromApi = async() =>{
   return await axiosInstance.get(products)
}

