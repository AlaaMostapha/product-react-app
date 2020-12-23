import React, { useEffect } from "react";
import { Provider } from "react-redux";
import store from "../../redux/store/index";
// import "./productList.scss";
//material ui components
import MediaCard from "../../components/Card/Card";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
//custom components
import LoadingIndicator from "../../components/LoadingIndicator/LoadingIndicator";
import Quantity from "../../components/quantity/quantity";
import CreateButton from "../../components/Btn/Btn";
//store
import { useDispatch, useSelector } from "react-redux";
import * as productsActions from "../../redux/actions/actions";
import * as cartActions from "../../redux/actions/cart";
//history
import Link from "next/link";
function ProductList() {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cartReducer.cart);
  const products = useSelector((state) => state.productsReducer.products);
  const loading = useSelector((state) => state.productsReducer.loader);
  useEffect(() => {
    //when component mount get all products
    dispatch(productsActions.getProducts());
  }, []);
  useEffect(() => {
    //if there are items in cart
    if (cart) {
      //get there indexes in product list
      let indexesOfCartItems = cart.map((cartItem) => {
        return products.findIndex((itemx) => itemx.id === cartItem.id);
      });
      //replace them with items in product list
      //to get them updated with last quantity applied in cart at the same time
      for (let i = 0; i < indexesOfCartItems.length; i++) {
        products.splice(indexesOfCartItems[i], 1, cart[i]);
      }
    }
  }, [products, cart]);
  const addItem = (item) => {
    //add clicked product to cart
    dispatch(cartActions.addItemInCart(item));
    //check if this item is in cart & has quantity return it and update products
    const checkProduct = cart.find((product) => product.id === item.id); //check if it was in cart
    if (checkProduct) {
      const itemIndexInProducts = products.findIndex(
        (itemx) => itemx.id === item.id
      );
      //get it's index from products
      products[itemIndexInProducts] = checkProduct; //replace it with old one
      if (itemIndexInProducts !== -1) {
        dispatch(productsActions.showProducts(products)); //update
      }
    }
  };
  const createList = () => {
    if (products) {
      Object.entries(products).map((product, index) => {
        return (
          <li key={index}>
            <Link href="/products/[product.id]" as={"/product/"}>
              <a>{product.title}</a>
              <p>{product.description}</p>
            </Link>
          </li>
        );
      });
    }
  };
  return (
    <Provider store={store}>
      <Container maxWidth="lg" className="ProductListContainer">
        {loading ? (
          <LoadingIndicator />
        ) : (
          <Grid container spacing={2}>
            {createList()}
          </Grid>
        )}
      </Container>
    </Provider>
  );
}

export default ProductList;
