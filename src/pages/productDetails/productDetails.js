import React, { useEffect } from "react";
import CreateButton from "../../components/Btn/Btn";
import Container from "@material-ui/core/Container";
import { useDispatch, useSelector } from "react-redux";
import * as productActions from "../../redux/actions/product";
import * as cartActions from "../../redux/actions/cart";
import LoadingIndicator from "../../components/LoadingIndicator/LoadingIndicator";
import Quantity from "../../components/quantity/quantity";
function ProductDetails(props) {
  const dispatch = useDispatch();
  const singleProduct = useSelector(
    (state) => state.singleProductReducer.singleProduct
  );
  const cart = useSelector((state) => state.cartReducer.cart);
  useEffect(() => {
    const { productId } = props.match.params;
    // request item from api
    dispatch(productActions.getSingleProduct(productId));
  }, []);
  useEffect(() => {
    //check if this item is in cart return it from cart with it's quantity
    const product = cart.find((product) => product.id === singleProduct.id);
    if (product) {
      dispatch(productActions.showSingleProduct(product));
    } else {
      dispatch(productActions.showSingleProduct(singleProduct));
    }
  }, [cart]);

  const addItem = (singleProduct) => {
    //add item to cart
    dispatch(cartActions.addItemInCart(singleProduct));
  };
  return (
    <Container maxWidth="lg">
      {singleProduct ? (
        <div style={{ display: "flex", textAlign: "left" }}>
          <img
            src={singleProduct.image}
            alt={singleProduct.alt}
            style={{ height: "250px", margin: "10px" }}
          />
          <div>
            <h3>{singleProduct.title}</h3>
            <h4>Description:</h4>
            <p>{singleProduct.description}</p>
            <div>
              <h4>Price:</h4>
              <p>{singleProduct.price}</p>
            </div>
            {singleProduct.quantity ? (
              <Quantity item={singleProduct} />
            ) : (
              <CreateButton
                color="primary"
                text="Add to cart"
                onClick={() => addItem(singleProduct)}
              />
            )}
          </div>
        </div>
      ) : (
        <LoadingIndicator />
      )}
    </Container>
  );
}

export default ProductDetails;
