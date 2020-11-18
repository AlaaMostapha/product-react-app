import React, { Component } from "react";
import {
  Router,
  Switch,
  Route,
} from "react-router-dom";
import history from './history';
import ProductList from '../pages/productList/productList'
import ProductDetails from '../pages/productDetails/productDetails';
import ReviewOrder from '../pages/ReviewOrder/ReviewOrder';
import OrderNow from '../pages/UserFormOrderNow/OrderNow';

export default function Routes({location}) {
 
        return (
            <Router history={history} location={location}>
               
                <Switch>
                    <Route exact path={["/", "/products"]} component={ProductList}/>
                    <Route  path="/products/:productId" component={ProductDetails}/>
                    <Route   path="/ReviewOrder" component={ReviewOrder}/>
                    <Route   path="/OrderNow" component={OrderNow}/>
                </Switch>
            </Router>
        )
    
}