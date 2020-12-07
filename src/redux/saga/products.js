import { call, put } from "redux-saga/effects";
import { getProductsFromApi } from "../../network/api/products";
import { showProducts } from "../actions/actions";

function* handlGetProducts(action) {
  const response = yield call(getProductsFromApi);
  yield put(showProducts(response.data));
}

export { handlGetProducts };
