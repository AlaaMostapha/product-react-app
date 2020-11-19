import * as actionType from '../constants/actionTypes';
export default function loginReducer(state={},action){
    switch(action.type){
        case actionType.GET_USERS_FROM_FAKE_API :{
            console.log(action,state)
            return{
                ...state,
                users:action.payload.users
            }
        }
        case actionType.CHECK_LOGIN_USER :{
            console.log(action,state)
            let users = JSON.parse(JSON.stringify(state.users))//deep copy
            // console.log('users deep copy',users)
            // console.log('user in submit',action.payload.user)
            // let check = users.includes(action.payload.user)//check for whole user obj in array
            let found = users.find(user=>user.email===action.payload.user.email)//check for this user in api array
            let check=false;
            if(found) check=true
            console.log('check',check)
            return{
                ...state,
                user:action.payload.user,
                check:check,
            }
        }
        default: return state;
    }
}