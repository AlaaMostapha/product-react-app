import * as actionType from "../constants/actionTypes";

//PRODUCTS
export const getProducts = () => ({
  type: actionType.PRODUCT_REQUEST,
});
export const showProducts = (response) => ({
  type: actionType.PRODUCT_RESPONSE,
  payload: {
    products: response,
  },
});
