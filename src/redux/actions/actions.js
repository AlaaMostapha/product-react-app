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
export const getItemsFromCart =(items)=>({
    type: actionType.GET_ITEMS_FROM_CART,
    payload: {
        cart:items
    }
})
export const addItemInCart=(item)=>({
    type: actionType.EDIT_ITEM_IN_CART,
    payload: {
        newItem:item
    }
})

export const updateItemInCart = (item) =>({
    type: actionType.UPDATE_ITEM_IN_CART,
    payload :{
        //return updated item //item is updated item
        updatedItem:item
    }
})

export const deleteItemInCart =(item)=>({
    type: actionType.DELETE_ITEM_IN_CART,
    payload :{
        deletedItem:item
    }
})