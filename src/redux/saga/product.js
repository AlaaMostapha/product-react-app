import { call ,put} from 'redux-saga/effects';
import {getProductsFromApi} from '../../axios/api/product';
import  {showProducts} from '../actions/index';

function* handlGetProducts(action) {
    const response=yield call(getProductsFromApi());
    yield put(showProducts(response))
}
 
export {
  handlGetProducts,
};