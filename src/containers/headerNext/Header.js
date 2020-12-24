import React from "react";
import Link from "next/link";
import styles from "./header.module.scss";
//material ui
import {
  AppBar,
  Toolbar,
  Typography,
  MenuItem,
  Badge,
} from "@material-ui/core";
import AccountCircle from "@material-ui/icons/AccountCircle";
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";
import FadeMenu from "../../components/Menu/Menu";
//custom components
import Cart from "../Cart/Cart";
import CreateButton from "../../components/Btn/Btn";
//actions
import { useDispatch, useSelector } from "react-redux";
import * as cartActions from "../../redux/actions/cart";
import { useRouter } from "next/router";
function Header(props) {
  const router = useRouter();
  //actions hooks
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cartReducer.cart);
  const itemsNum = useSelector((state) => state.cartReducer.itemsNum);

  const removeItemFromCart = (item) => {
    dispatch(cartActions.deleteItemInCart(item));
  };
  const redirectToReviewPage = () => {
    router.push(`/ReviewOrder/ReviewOrder`);
  };
  const profileDropDownItems = ["View/ Edit Profile", "Sign out"];
  return (
    <div className={styles.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" className={styles.title}>
            <Link href="/productListNext/productList">
              <a className={styles.headerTitle}>Products</a>
            </Link>
          </Typography>

          <FadeMenu
            aria-label="profile"
            iconType={<AccountCircle />}
            id="profile"
            items={profileDropDownItems.map((item, index) => (
              <MenuItem key={index}>{item}</MenuItem>
            ))}
          />

          <FadeMenu
            aria-label="add to shopping cart"
            iconType={
              <Badge badgeContent={itemsNum} color="secondary">
                <AddShoppingCartIcon style={{ color: "white" }} />
              </Badge>
            }
            id="cart"
            items={(cart || []).slice(0, 3).map((item, index) => {
              return (
                <>
                  <MenuItem key={item.id}>
                    <Cart
                      title={item.title}
                      img={item.image}
                      onDelete={() => removeItemFromCart(item)}
                      item={item}
                    />
                  </MenuItem>
                  {index === (cart || []).slice(0, 3).length - 1 && (
                    <MenuItem style={{ justifyContent: "center" }}>
                      <CreateButton
                        color="primary"
                        text="Review Order"
                        onClick={redirectToReviewPage}
                      />
                    </MenuItem>
                  )}
                </>
              );
            })}
          />
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default Header;
