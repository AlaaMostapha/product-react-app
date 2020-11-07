import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootReducers from '../reducers/index'
import rootSaga from '../saga/index';

//create saga middleware
const sagaMiddleWare = createSagaMiddleware();

//create store and fetch reducers and saga middleware
const store = createStore(
    rootReducers,
    applyMiddleware(sagaMiddleWare)
)

//run saga middleware
sagaMiddleWare.run(rootSaga);

export default store;