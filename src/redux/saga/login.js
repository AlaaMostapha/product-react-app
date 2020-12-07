import { call, put } from "redux-saga/effects";
import { requestUsersFromApi } from "../../network/api/login";
import { getUsersFromApi } from "../actions/login";

function* handlGetUsers(action) {
  const response = yield call(requestUsersFromApi);
  yield put(getUsersFromApi(response.data));
}

export { handlGetUsers };
