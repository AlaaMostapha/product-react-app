import React from 'react';
import './Header.scss';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
// import MenuIcon from '@material-ui/icons/Menu';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MenuItem from '@material-ui/core/MenuItem';
import FadeMenu from '../../components/Menu/Menu';
import Menu from '@material-ui/core/Menu';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import Cart from '../Cart/Cart';
import Badge from '@material-ui/core/Badge';
import  CreateButton from '../../components/Btn/Btn';
import { useHistory } from "react-router-dom";
import {connect} from 'react-redux';
import * as actions from '../../redux/actions/actions';

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
  const classes = useStyles();
  const history = useHistory();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);


  const handleMenu = (event) => {
    // console.log(event)
    // console.log(event.currentTarget)
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  const removeItemFromCart=(productId)=>{
       props.deleteItemInCart(productId)
    }
  const reviewPage=()=>{
      history.push('/ReviewOrder'); 
  }
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            Products
          </Typography>
          <FadeMenu iconType={AccountCircle} items={['View/ Edit Profile','Sign out']} ariaLabel={"account of current user"}/>
            <IconButton aria-label="add to shopping cart"  onClick={handleMenu} 
            aria-controls="menu-appbar"
                aria-haspopup="true">
                  <Badge  badgeContent={props.itemsNum} color="secondary">
                    <AddShoppingCartIcon style={{ color: 'white' }}/>
                  </Badge>
                   </IconButton>
                <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                getContentAnchorEl={null}
                anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'center',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'center',
                }}
                open={open}
                onClose={handleClose}
              >
                 {/* <MenuItem onClick={handleClose}>X</MenuItem> */}
                {(props.cart || [] ).slice(0, 3).map(item=>{
                  return(
                    <MenuItem key={item.id}>
                      <Cart 
                      title={item.title}
                      img={item.image}
                      onDelete={()=>removeItemFromCart(item.id)}
                      item={item}
                      // onChangeQuantity
                      /> 
                      {/* {console.log(item.quantity)} */}
                  </MenuItem>
                  )
                })}
                <MenuItem style={{justifyContent:"center"}}>
                  <CreateButton color="primary" text="Review Order" onClick={reviewPage}/>
                </MenuItem>
              </Menu>
           
        </Toolbar>
      </AppBar>
    </div>
  );
}
function mapDispatchToProps(dispatch){
  return{
   deleteItemInCart: (id)=>dispatch(actions.deleteItemInCart(id))
  }
} 
function mapStateToProps(state){
  // console.log(state)
  //  console.log(state.productsReducer)
  return{
    cart:state.cartReducer.cart,
    cartLoader:state.cartReducer.cartLoader,
    itemsNum:state.cartReducer.itemsNum
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(Header); 