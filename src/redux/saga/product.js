import { call,take ,put} from 'redux-saga/effects';
import {getProductsFromApi} from '../../axios/api/product';
import  {showProducts} from '../actions/actions';

function* handlGetProducts() {
    const response=yield call(getProductsFromApi);
    console.log(response)
    yield put(showProducts(response))
}
 
export {
  handlGetProducts,
};