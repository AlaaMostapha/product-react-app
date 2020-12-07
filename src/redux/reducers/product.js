//reducer(action,state) //return update state

import * as actionType from "../constants/actionTypes";
export default function singleProductReducer(state = {}, action) {
  switch (action.type) {
    case actionType.PREQUEST_SINGLLE_PRODUCT: {
      return {
        ...state,
        singleProductloader: true,
        id: action.payload.singleProductId,
      };
    }
    case actionType.GET_SINGLLE_PRODUCT: {
      return {
        singleProductloader: false,
        singleProduct: action.payload.singleProduct,
      };
    }
    default:
      return state;
  }
}
