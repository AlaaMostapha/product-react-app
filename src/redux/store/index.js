import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import rootReducers from "../reducers/index";
import rootSaga from "../saga/index";
import { composeWithDevTools } from "redux-devtools-extension";
import { createWrapper } from "next-redux-wrapper";
//create saga middleware
const sagaMiddleWare = createSagaMiddleware();

//create store and fetch reducers and saga middleware
const store = createWrapper(
  createStore(
    rootReducers,
    composeWithDevTools(applyMiddleware(sagaMiddleWare))
  ),
  { debug: true }
);

//run saga middleware
sagaMiddleWare.run(rootSaga);

export default store;
