import axiosInstance from '../products';
import * as Handlers from '../handlers/product'
const products ="products/";

export const getSingleProductFromApi = async(id) =>{
   return await axiosInstance.get(products+id)
}


//interceptors
axiosInstance.interceptors.request.use(
    request=>Handlers.handleRequest(request)
)
axiosInstance.interceptors.response.use(
    response=>Handlers.handleResponse(response),
    error=>Handlers.handleError(error)
)