//reducer(action,state) //return update state

import * as actionType from '../constants/actionTypes';
const initState ={
    cart:[],
    // total: 0,
     itemsNum:0,
    // quantity:0,
    // quantityValue:0
}
export default function cartReducer(state=initState,action){
    switch(action.type){
        case actionType.ADD_ITEM_TO_CART :{
            let newItem=action.payload.newItem
            let existItem=state.cart.find(item=>item.id===newItem.id)
            if(!existItem){
                 newItem.quantity=1;
                 return{
                     ...state,
                    cartLoader:false,
                    newItem,
                    itemsNum:state.itemsNum+1,
                    cart: [...state.cart,newItem],
                }
            }else{
                newItem.quantity+=1;
                 return{
                     ...state,
                    cartLoader:false,
                    newItem,
                    itemsNum:state.itemsNum,
                    cart:[...state.cart],
                }
            }
        }
        case actionType.DELETE_ITEM_IN_CART :{
            // console.log(action,state)
            let deletedItemID=action.payload.deletedItemID
            return{
                ...state,
                deletedItemID,
                itemsNum:state.itemsNum-1,
                cart:state.cart.filter(item => item.id !== deletedItemID)
               //remove //deletedItem:action.payload.deletedItem //remove from store(state)
            }
        }
        case actionType.INCREMENT_QUANTITY :{
            // console.log(action,state)
            // console.log(action.payload.item)
            let newCart = state.cart.filter(product =>product.id !==action.payload.item)
            action.payload.item.quantity=++action.payload.item.quantity
            return{
                ...state,
                cart:newCart
            }
        }
        case actionType.DECREMENT_QUANTITY :{
            // console.log(action,state)
            // let price=action.payload.price;
            let newCart = state.cart.filter(product =>product.id !==action.payload.item)
            action.payload.item.quantity=--action.payload.item.quantity
            return{
                ...state,
                cart:newCart
            }
        }
        // case actionType.INITALIZE_QUANTITY :{
        //     // console.log(action,state)
        //     return{
        //         ...state,
        //         quantityValue:action.payload.quantityValue
        //     }
        // }
        default : return state;
    }
}