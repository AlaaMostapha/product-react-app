//reducer(action,state) //return update state

import * as actionType from "../constants/actionTypes";
const initState = {
  cart: [],
  itemsNum: 0,
};
export default function cartReducer(state = initState, action) {
  switch (action.type) {
    case actionType.ADD_ITEM_TO_CART: {
      let newItem = action.payload.newItem;
      let existItem = state.cart.find((item) => item.id === newItem.id); //check if item exist in cart or not
      if (!existItem) {
        newItem.quantity = 1; //if not exist add it with q = 1
        return {
          ...state,
          cartLoader: false,
          newItem,
          itemsNum: state.itemsNum + 1, //inc no of items to badge no
          cart: [...state.cart, newItem], //reload cart
        };
      } else {
        newItem.quantity += 1; //if item is already exit in cart //inc it's quantity
        return {
          ...state,
          cartLoader: false,
          newItem,
          itemsNum: state.itemsNum,
          cart: [...state.cart], //reload cart
        };
      }
    }
    case actionType.DELETE_ITEM_IN_CART: {
      let deletedItem = action.payload.deletedItem;
      deletedItem.quantity = 0; //set quantity of deleted item to 0
      return {
        ...state,
        deletedItem,
        itemsNum: state.itemsNum - 1,
        cart: state.cart.filter((item) => item.id !== deletedItem.id), //filter cart after delete item
      };
    }
    case actionType.INCREMENT_QUANTITY: {
      let item = action.payload.item;
      let newCart = JSON.parse(JSON.stringify(state.cart)); //deep copy
      let index = newCart.findIndex((itemx) => itemx.id === item.id); // find this item in cart
      item.quantity = ++item.quantity; //inc it's q
      newCart.splice(index, 1, item); //replace it with new item
      return {
        ...state,
        cart: [...newCart],
      };
    }
    case actionType.DECREMENT_QUANTITY: {
      let item = action.payload.item;
      let newCart = JSON.parse(JSON.stringify(state.cart)); //deep copy
      let index = state.cart.indexOf(item); // find this item in cart
      item.quantity = --item.quantity; //dec its quantity

      if (action.payload.item.quantity === 0) {
        //if q=0
        newCart = newCart.filter(
          (product) => product.id !== action.payload.item.id //delete this item
        );
        state.itemsNum = state.itemsNum - 1; //dec no of items in badge
      } else {
        newCart.splice(index, 1, item); //else dec it's quantity
      }
      return {
        ...state,
        cart: [...newCart],
      };
    }
    default:
      return state;
  }
}
