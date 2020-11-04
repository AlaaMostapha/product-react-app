//reducer(action,state) //return update state

import * as actionType from '../constants/actionTypes';
export default function singleProductReducer(state={},action){
    switch(action.type){
        case actionType.PREQUEST_SINGLLE_PRODUCT :{
            console.log(action,state)
            return{
               ...state,
               singleProductloader: true,
               id:action.payload.singleProductId
            }
        }
        case actionType.GET_SINGLLE_PRODUCT :{
            console.log(action,state)
            return{
                singleProduct:action.payload.singleProduct,
                singleProductloader: false
            }
        }
        default : return state;
    }
}