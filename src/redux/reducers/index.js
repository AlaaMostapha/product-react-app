import { combineReducers } from 'redux';
import loadingReducer  from './loader';
import productsReducer  from './products';
import singleProductReducer from './product'

const rootReducers= combineReducers({
    loadingReducer,
    productsReducer,
    singleProductReducer
})

export default rootReducers;