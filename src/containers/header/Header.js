import React from "react";
import "./Header.scss";
import { makeStyles } from "@material-ui/core/styles";
import {
  AppBar,
  Toolbar,
  Typography,
  MenuItem,
  Badge,
} from "@material-ui/core";
import AccountCircle from "@material-ui/icons/AccountCircle";
import FadeMenu from "../../components/Menu/Menu";
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";
import Cart from "../Cart/Cart";
import CreateButton from "../../components/Btn/Btn";
import history from "../../Route/history";
import { useDispatch, useSelector } from "react-redux";
import * as actions from "../../redux/actions/actions";
import { Link } from "react-router-dom";
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

function Header(props) {
  const dispatch = useDispatch();
  const classes = useStyles();
  const cart = useSelector((state) => state.cartReducer.cart);
  const itemsNum = useSelector((state) => state.cartReducer.itemsNum);

  const removeItemFromCart = (product) => {
    dispatch(actions.deleteItemInCart(product));
  };
  const reviewPage = () => {
    history.push("/ReviewOrder");
  };
  const profileItems = ["View/ Edit Profile", "Sign out"];
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            <Link
              to="/"
              style={{ color: "white", textDecoration: "none" }}
              onClick={() => history.push("/")}
            >
              Products
            </Link>
          </Typography>

          <FadeMenu
            aria-label="profile"
            iconType={<AccountCircle />}
            id="profile"
            items={profileItems.map((item, index) => (
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
                  {index === cart.length - 1 && (
                    <MenuItem style={{ justifyContent: "center" }}>
                      <CreateButton
                        color="primary"
                        text="Review Order"
                        onClick={reviewPage}
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
