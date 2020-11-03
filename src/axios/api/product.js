import axiosInstance from './product';

const products ="/products";

export const getProductsFromApi = async() =>{
   return await axiosInstance.get(products)
}