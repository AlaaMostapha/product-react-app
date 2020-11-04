import { combineReducers } from 'redux';
import loadingReducer  from './loader';
import productReducer  from './product';

const rootReducers= combineReducers({
    loadingReducer,
    productReducer
})

export default rootReducers;