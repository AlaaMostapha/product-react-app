import { call, put } from "redux-saga/effects";
import { getSingleProductFromApi } from "../../network/api/product";
import { showSingleProduct } from "../actions/product";

function* handlGetSingleProduct(action) {
  const response = yield call(
    getSingleProductFromApi,
    action.payload.singleProductId
  );
  yield put(showSingleProduct(response.data));
}

export { handlGetSingleProduct };
