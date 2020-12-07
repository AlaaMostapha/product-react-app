import { combineReducers } from "redux";
import productsReducer from "./products";
import singleProductReducer from "./product";
import cartReducer from "./cart";
import loginReducer from "./login";
const rootReducers = combineReducers({
  productsReducer,
  singleProductReducer,
  cartReducer,
  loginReducer,
});

export default rootReducers;
