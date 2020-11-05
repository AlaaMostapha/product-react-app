import { combineReducers } from 'redux';
import loadingReducer  from './loader';
import productsReducer  from './products';
import singleProductReducer from './product'
import cartReducer from './cart';
const rootReducers= combineReducers({
    loadingReducer,
    productsReducer,
    singleProductReducer,
    cartReducer
})

export default rootReducers;