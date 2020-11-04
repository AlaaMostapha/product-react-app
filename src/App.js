import './App.scss';
import Header from './containers/header/Header';
import ProductList from './pages/productList/productList'
import { Provider } from 'react-redux';
import store from './redux/store/index';
import ProductDetails from './pages/productDetails/productDetails'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
function App() {
  
  return (
    <Provider store={store}>
      <div className="App">
           <Header/>
        <Router>
    
            <Route exact path="/products" component={ProductList}/>
          <Route   exact path="/products/:productId" component={ProductDetails}/>
          
     
        </Router>
     
      </div>
    </Provider>
  );
}


export default App;