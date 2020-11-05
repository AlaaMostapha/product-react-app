//reducer(action,state) //return update state

import * as actionType from '../constants/actionTypes';
export default function cartReducer(state={},action){
    switch(action.type){
        case actionType.GET_ITEMS_FROM_CART :{
            console.log(action,state)
            return{
               cartLoader:false,
               cart:action.payload.cart
            }
        }
        case actionType.ADD_ITEM_TO_CART :{
            console.log(action,state)
            return{
                ...state,
               newItem:action.payload.newItem
            }
        }
        case actionType.UPDATE_ITEM_IN_CART :{
            console.log(action,state)
            return{
               ...state,
               updatedItem:action.payload.updatedItem
            }
        }
        case actionType.DELETE_ITEM_IN_CART :{
            console.log(action,state)
            return{
               //remove //deletedItem:action.payload.deletedItem //remove from store(state)
            }
        }
        default : return state;
    }
}