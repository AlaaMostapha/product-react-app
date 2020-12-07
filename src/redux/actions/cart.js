import * as actionType from "../constants/actionTypes";

//cart
export const addItemInCart = (item) => ({
  type: actionType.ADD_ITEM_TO_CART,
  payload: {
    newItem: item,
  },
});

export const deleteItemInCart = (item) => ({
  type: actionType.DELETE_ITEM_IN_CART,
  payload: {
    deletedItem: item,
  },
});

export const incrementQuantity = (item) => ({
  type: actionType.INCREMENT_QUANTITY,
  payload: {
    item,
  },
});
export const decrementQuantity = (item) => ({
  type: actionType.DECREMENT_QUANTITY,
  payload: {
    item,
  },
});
