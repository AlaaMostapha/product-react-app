import * as actionType from '../constants/actionTypes';

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
