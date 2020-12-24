import styles from "./ReviewOrder.module.scss";
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Container from "@material-ui/core/Container";
import LoadingIndicator from "../../components/LoadingIndicator/LoadingIndicator";
import DeleteIcon from "@material-ui/icons/Delete";
import Quantity from "../../components/quantity/quantity";
import CreateButton from "../../components/Btn/Btn";
import * as cartActions from "../../redux/actions/cart";
import BasicTable from "../../components/table/table";
import { TableCell, TableRow } from "@material-ui/core";
import { useRouter } from "next/router";
function ReviewOrder(props) {
  const router = useRouter();
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cartReducer.cart);
  const cartLoader = useSelector((state) => state.cartReducer.cartLoader);
  //each product display with quantity and delete btn //rest unit price and total price
  const [carttotal, setcarttotal] = useState(0);

  useEffect(() => {
    setcarttotal(
      cart
        .reduce(function (accumlator, product) {
          return accumlator + product.price * product.quantity;
        }, 0)
        .toFixed(3)
    );
  }, [cart]);
  const removeItemFromCart = (product) => {
    dispatch(cartActions.deleteItemInCart(product));
  };
  const redirectToUserForm = () => {
    return router.push(`/UserFormOrderNow/OrderNow`);
  };
  const tableHeadings = ["Item", "Unit Price", "Total Price", "Delete"];

  return (
    <Container maxWidth="lg" className="ProductListContainer">
      <h2 className="text-center">Review Your Order</h2>
      {cartLoader ? (
        <LoadingIndicator />
      ) : (
        <BasicTable
          className={styles.basicTable}
          tableHeadings={tableHeadings}
          arrayItems={cart.map((product, index) => (
            <>
              <TableRow key={index}>
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
                        className={styles.reviewPageImg}
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
                    onClick={() => removeItemFromCart(product)}
                  />
                </TableCell>
              </TableRow>
              {index === cart.length - 1 && (
                <TableRow>
                  <TableCell>
                    <b>Total</b>
                  </TableCell>
                  <TableCell colSpan={3} style={{ textAlign: "center" }}>
                    <b>{carttotal}</b>
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
          onClick={redirectToUserForm}
        />
      </div>
    </Container>
  );
}
export default ReviewOrder;
