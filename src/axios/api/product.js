import axiosInstance from '../products';

const products ="products";

export const getProductsFromApi = async() =>{
   console.log(axiosInstance.get(products))
   return await axiosInstance.get(products)
}

