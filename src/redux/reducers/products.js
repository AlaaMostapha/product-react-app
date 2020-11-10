//reducer(action,state) //return update state

import * as actionType from '../constants/actionTypes';
export default function productsReducer(state={},action){
    switch(action.type){
        case actionType.PRODUCT_REQUEST :{
            // console.log(action,state)
            return{
               ...state,
               loader: true
            }
        }
        case actionType.PRODUCT_RESPONSE :{
            // console.log(action,state)
            return{
                products:action.payload.products,
                loader: false
            }
        }
        default : return state;
    }
}