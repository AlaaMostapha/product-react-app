import * as actionType from "../constants/actionTypes";

//single product
export const getSingleProduct = (id) => ({
  type: actionType.PREQUEST_SINGLLE_PRODUCT,
  payload: {
    singleProductId: id,
  },
});
export const showSingleProduct = (response) => ({
  type: actionType.GET_SINGLLE_PRODUCT,
  payload: {
    singleProduct: response,
  },
});
