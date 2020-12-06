import * as actionType from "../constants/actionTypes";
export default function loginReducer(state = {}, action) {
  switch (action.type) {
    case actionType.GET_USERS_FROM_FAKE_API: {
      return {
        ...state,
        users: action.payload.users,
      };
    }
    case actionType.CHECK_LOGIN_USER: {
      let users = JSON.parse(JSON.stringify(state.users)); //deep copy
      let found = users.find(
        (user) => user.email === action.payload.user.email
      ); //check for this user in api array
      let check = false;
      if (found) check = true;
      return {
        ...state,
        user: action.payload.user,
        check: check,
      };
    }
    default:
      return state;
  }
}
