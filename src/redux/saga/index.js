
import { takeEvery, all } from 'redux-saga/effects';
import {handlGetProducts} from './product';
import * as actionTypes from '../constants/actionTypes';
function* watchAll() {
  yield all([
    takeEvery(actionTypes.PRODUCT_REQUEST,handlGetProducts),
  ])
}
 
export default watchAll;