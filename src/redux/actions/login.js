import * as actionType from '../constants/actionTypes';

export const requestUsersFromApi =()=>({
    type:actionType.REQUEST_USERS_FROM_FAKE_API,
})

export const getUsersFromApi =(users)=>({
    type:actionType.GET_USERS_FROM_FAKE_API,
    payload:{
        users:users
    }
})

export const checkLoginUser =(user)=>({
    type:actionType.CHECK_LOGIN_USER,
    payload:{
        user:user,
    }
})
