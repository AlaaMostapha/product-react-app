//reducer(action,state) //return update state

import * as actionType from '../actionTypes';
export default function productReducer(state={},action){
    switch(action.type){
        case actionType.PRODUCT_REQUEST :{
            console.log(action,state)
            return{
            //    ...state,
               loader: true
            }
        }
        case actionType.PRODUCT_RESPONSE :{
            console.log(action,state)
            return{
                products:action.payload.products,
                loader: false
            }
        }
        default : return state;
    }
}