import * as actionType from '../actionTypes';

export const getProducts =()=>({
    type: actionType.PRODUCT_REQUEST,
})

export const showProducts =(response)=>({
    type: actionType.PRODUCT_RESPONSE,
    payload:{
        products:response
    }
})

export const loading= (value)=>({
    type: actionType.LOADING,
    payload:{
        loading:value
    }   
})