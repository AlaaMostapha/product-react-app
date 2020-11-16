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
            
            let item =action.payload.item
            let newCart = JSON.parse(JSON.stringify(state.cart))
            let index = newCart.findIndex(itemx=> itemx.id ===item.id);// find this item in cart
            item.quantity=++item.quantity //inc it's q
            newCart.splice(index, 1, item)//replace it with old item
            console.log('new cart after inc')
            console.log(newCart)
            return{
                ...state,
                cart:[...newCart]
            }
        }
        case actionType.DECREMENT_QUANTITY :{
           
            let item =action.payload.item
            let newCart = JSON.parse(JSON.stringify(state.cart))
            let index = state.cart.indexOf(item); 
            item.quantity=--item.quantity
            
            if(action.payload.item.quantity===0){
                newCart = newCart.filter(product =>product.id !==action.payload.item.id)
                state.itemsNum=state.itemsNum-1;
            }else{
                newCart.splice(index, 1, item)
            }
            console.log(newCart)
            return{
                ...state,
                cart:[...newCart],
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