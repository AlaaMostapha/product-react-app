import * as actionType from '../constants/actionTypes';

//PRODUCT
export const getProducts =()=>({
    type: actionType.PRODUCT_REQUEST,
})
export const showProducts =(response)=>({
    type: actionType.PRODUCT_RESPONSE,
    payload:{
        products:response
    }
})
//loading
export const loading= (value)=>({
    type: actionType.LOADING,
    payload:{
        loading:value
    }   
})
//single product
export const getSingleProduct =(id)=>({
    type: actionType.PREQUEST_SINGLLE_PRODUCT,
    payload:{
        singleProductId:id
    }
})
export const showSingleProduct =(response)=>({
    type: actionType.GET_SINGLLE_PRODUCT,
    payload:{
        singleProduct:response
    }
})

//cart
export const addItemInCart=(item)=>({
    type: actionType.ADD_ITEM_TO_CART,
    payload: {
        newItem:item,
    }
})

export const deleteItemInCart =(itemID)=>({
    type: actionType.DELETE_ITEM_IN_CART,
    payload :{
        deletedItemID:itemID
    }
})

export const incrementQuantity =(item)=>({
    type: actionType.INCREMENT_QUANTITY,
    payload :{
        item
    }
})
export const decrementQuantity =(item)=>({
    type: actionType.DECREMENT_QUANTITY,
    payload :{
        item
    }
})

// export const initializeQuantity =(quantityValue)=>({
//     type: actionType.INITALIZE_QUANTITY,
//     payload :{
//         quantityValue
//     }
// })