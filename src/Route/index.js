import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Header from '../containers/header/Header';
import ProductList from '../pages/productList/productList'
import ProductDetails from '../pages/productDetails/productDetails';
import ReviewOrder from '../pages/ReviewOrder/ReviewOrder';
import OrderNow from '../pages/UserFormOrderNow/OrderNow';

export default class Routes extends Component {
    render() {
        return (
            <Router>
            <Header/>
            <Switch>
                <Route exact path={["/", "/products"]} component={ProductList}/>
                <Route   exact path="/products/:productId" component={ProductDetails}/>
                <Route exact path="/ReviewOrder" component={ReviewOrder}/>
                <Route exact path="/OrderNow" component={OrderNow}/>
            </Switch>
            </Router>
        )
    }
}