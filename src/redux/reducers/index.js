import { combineReducers } from 'redux';
import loadingReducer  from './loader';
import productsReducer  from './products';
import singleProductReducer from './product'
import cartReducer from './cart';
import loginReducer from './login'
const rootReducers= combineReducers({
    loadingReducer,
    productsReducer,
    singleProductReducer,
    cartReducer,
    loginReducer
})

export default rootReducers;