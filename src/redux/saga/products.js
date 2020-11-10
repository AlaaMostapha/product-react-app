import { call ,put} from 'redux-saga/effects';
import {getProductsFromApi} from '../../axios/api/products';
import  {showProducts} from '../actions/actions';

function* handlGetProducts(action) {
    const response=yield call(getProductsFromApi);
    // console.log("saga response")
    // console.log(response.data);
    // console.log(response.data);
    yield put(showProducts(response.data))
}
 
export {
  handlGetProducts,
};