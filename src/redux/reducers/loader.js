//reducer(action,state) //return update state

import * as actionType from '../actionTypes';
export default function loadingReducer(state=false,action){
    switch(action.type){
        case actionType.LOADING :{
            return{
                payload:{
                    loading:action.payload.loading
                }
            }
        }
        default : return state;
    }
}