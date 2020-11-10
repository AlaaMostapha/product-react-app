import React from 'react';
// import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Fade from '@material-ui/core/Fade';
import './Menu.scss'
// import AccountCircle from '@material-ui/icons/AccountCircle';
import IconButton from '@material-ui/core/IconButton';

export default function FadeMenu(props) {
  //  console.log(props)
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
  return (
   
    <div>
    <IconButton
    aria-label={props.ariaLabel}
    aria-controls="menu-appbar"
    aria-haspopup="true"
    onClick={handleMenu}
    color="inherit"
    >
      <props.iconType />
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
        TransitionComponent={Fade}
      >
        {props.items.map((link) =>
          <MenuItem onClick={handleClose} key={link}>{link}</MenuItem>
        )} 
       {/* {<MenuItem onClick={handleClose}>View/  Edit Profile </MenuItem> 
         <MenuItem onClick={handleClose}>Sign Out </MenuItem> */}
      </Menu>
    </div>
  );
}
