import React, { Component } from "react";
import CreateButton from "../../components/Btn/Btn";
import Container from "@material-ui/core/Container";
import { connect } from "react-redux";
import * as productActions from "../../redux/actions/product";
import * as cartActions from "../../redux/actions/cart";
import LoadingIndicator from "../../components/LoadingIndicator/LoadingIndicator";
import Quantity from "../../components/quantity/quantity";
class ProductDetails extends Component {
  componentDidUpdate() {
    const { cart, singleProduct } = this.props;
    //check if this item is in cart return it from cart with it's quantity
    const product = cart.find((product) => product.id === singleProduct.id);
    if (product) {
      this.props.showSingleProduct(product);
    } else {
      this.props.showSingleProduct(singleProduct);
    }
  }
  componentDidMount() {
    const { productId } = this.props.match.params;
    // request item from api
    this.props.getSingleProduct(productId);
  }

  addItem = (singleProduct) => {
    //add item to cart
    this.props.addItemInCart(singleProduct);
  };
  render() {
    const { singleProduct } = this.props;
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
                  onClick={() => this.addItem(singleProduct)}
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
}

// export default productDetails;
function mapStateToProps(state) {
  return {
    singleProduct: state.singleProductReducer.singleProduct,
    cart: state.cartReducer.cart,
  };
}
function mapDispatchToProps(dispatch) {
  return {
    getSingleProduct: (id) => dispatch(productActions.getSingleProduct(id)),
    addItemInCart: (item) => dispatch(cartActions.addItemInCart(item)),
    showSingleProduct: (item) =>
      dispatch(productActions.showSingleProduct(item)),
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(ProductDetails);
