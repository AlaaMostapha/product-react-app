import { call,take ,put} from 'redux-saga/effects';
import {getSingleProductFromApi} from '../../axios/api/product';
import  {showSingleProduct} from '../actions/actions';

function* handlGetSingleProduct(action) {
    const response=yield call(getSingleProductFromApi,action.payload.singleProductId);
    console.log("saga response")
    console.log(response.data);
    // console.log(response.data);
    yield put(showSingleProduct(response.data))
}
 
export {
  handlGetSingleProduct,
};