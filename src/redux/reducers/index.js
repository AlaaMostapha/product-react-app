import { combineReducers } from 'redux';
import loadingReducer  from './loading';
import productReducer  from './product';

const rootReducers= combineReducers({
    loadingReducer,
    productReducer
})

export default rootReducers;