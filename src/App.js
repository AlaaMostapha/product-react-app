import './App.scss';
import  CreateButton from './components/Btn/Btn';
import Header from './containers/header/Header';
import ProductList from './pages/productList/productList'
import { Provider } from 'react-redux';
import store from './redux/store/index';
// import {getProducts,showProducts} from '../src/redux/actions/actions';
// import {connect} from 'react-redux';
// import * as actions from './redux/actions/actions';
  // const state = store.getState();
function App() {
  
  return (
    <Provider store={store}>
      {/* {console.log(state)}
      {console.log(store.dispatch(getProducts()))}
      {console.log(store.dispatch(showProducts()))}
      {console.log(store.getState)}
{console.log(state)} */}
      <div className="App">
        <Header/>
        <ProductList/>
      </div>
    </Provider>
  );
}

// function mapDispatchToProps(dispatch){
//   return{
//    getProducts : ()=>dispatch(actions.getProducts())
//   }
// } 
// export default connect(null,mapDispatchToProps)(App); 

export default App;