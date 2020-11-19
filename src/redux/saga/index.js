
import { takeEvery, all } from 'redux-saga/effects';
import {handlGetProducts} from './products';
import {handlGetSingleProduct} from './product'
import {handlGetUsers} from './login'
import {} from './login'
import * as actionTypes from '../constants/actionTypes';
function* watchAll() {
  yield all([
    takeEvery(actionTypes.PRODUCT_REQUEST,handlGetProducts),
    takeEvery(actionTypes.PREQUEST_SINGLLE_PRODUCT,handlGetSingleProduct),
    takeEvery(actionTypes.REQUEST_USERS_FROM_FAKE_API,handlGetUsers),
  ])
}
 
export default watchAll;