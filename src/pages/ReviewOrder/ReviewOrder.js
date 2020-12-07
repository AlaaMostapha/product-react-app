import "./ReviewOrder.scss";
import React, { Component } from "react";
import { connect } from "react-redux";
import Container from "@material-ui/core/Container";
import LoadingIndicator from "../../components/LoadingIndicator/LoadingIndicator";
import DeleteIcon from "@material-ui/icons/Delete";
import Quantity from "../../components/quantity/quantity";
import CreateButton from "../../components/Btn/Btn";
import * as cartActions from "../../redux/actions/cart";
import BasicTable from "../../components/table/table";
import { TableCell, TableRow } from "@material-ui/core";
class ReviewOrder extends Component {
  //each product display with quantity and delete btn //rest unit price and total price
  constructor(props) {
    super(props);
    this.carttotal = 0;
  }
  componentDidMount() {
    console.log(this.props);
  }
  calculatTotalPrice() {
    console.log(this.props.cart);
    const cartTotal = this.props.cart
      .reduce(function (accumlator, product) {
        return accumlator + product.price * product.quantity;
      }, 0)
      .toFixed(3);
    console.log(cartTotal);
    return cartTotal;
  }
  removeItemFromCart = (product) => {
    console.log("item remove");
    this.total = 0;
    this.props.deleteItemInCart(product);
  };
  createList() {
    const { cart } = this.props;
    if (cart) {
      console.log("items in cart");
      return cart.map((product) => {
        return (
          <TableRow key={product.id}>
            <TableCell component="th" scope="row" display="flex">
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <div style={{ display: "flex", alignItems: "center" }}>
                  <img
                    src={product.image}
                    alt={product.title}
                    className="reviewPageImg"
                  />
                  {product.title}
                </div>
                <Quantity item={product} />
              </div>
            </TableCell>
            <TableCell>{product.price}</TableCell>
            <TableCell>
              {(product.price * product.quantity).toFixed(3)}
            </TableCell>
            <TableCell>
              <CreateButton
                color="secondary"
                text={<DeleteIcon />}
                onClick={() => this.removeItemFromCart(product)}
              />
            </TableCell>
          </TableRow>
        );
      });
    } else {
      console.log("no items in cart");
      return <div>No items</div>;
    }
  }
  redirectToUserForm = () => {
    return this.props.history.push(`/OrderNow`);
  };
  tableHeadings = ["Item", "Unit Price", "Total Price", "Delete"];
  render() {
    const { cartLoader } = this.props;
    return (
      <Container maxWidth="lg" className="ProductListContainer">
        <h2 className="text-center">Review Your Order</h2>
        {cartLoader ? (
          <LoadingIndicator />
        ) : (
          <BasicTable
            tableHeadings={this.tableHeadings}
            arrayItems={this.props.cart.map((product, index) => (
              <>
                <TableRow key={product.name}>
                  <TableCell component="th" scope="row" display="flex">
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                      }}
                    >
                      <div style={{ display: "flex", alignItems: "center" }}>
                        <img
                          src={product.image}
                          alt={product.title}
                          className="reviewPageImg"
                        />
                        {product.title}
                      </div>
                      <Quantity item={product} />
                    </div>
                  </TableCell>
                  <TableCell>{product.price}</TableCell>
                  <TableCell>
                    {(product.price * product.quantity).toFixed(3)}
                  </TableCell>
                  <TableCell>
                    <CreateButton
                      color="secondary"
                      text={<DeleteIcon />}
                      onClick={() => this.removeItemFromCart(product)}
                    />
                  </TableCell>
                </TableRow>
                {index === this.props.cart.length - 1 && (
                  <TableRow>
                    <TableCell>
                      <b>Total</b>
                    </TableCell>
                    <TableCell colspan={3} style={{ textAlign: "center" }}>
                      <b>{this.calculatTotalPrice()}</b>
                    </TableCell>
                  </TableRow>
                )}
              </>
            ))}
          />
        )}
        <div style={{ textAlign: "center" }}>
          <CreateButton
            color="primary"
            text="Order Now"
            onClick={this.redirectToUserForm}
          />
        </div>
      </Container>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    deleteItemInCart: (product) =>
      dispatch(cartActions.deleteItemInCart(product)),
  };
}
function mapStateToProps(state) {
  console.log(state);
  //  console.log(state.productsReducer)
  return {
    cart: state.cartReducer.cart,
    cartLoader: state.cartReducer.cartLoader,
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(ReviewOrder);

// first quantity come from store to display in review OrderNow
// after that it change in page
