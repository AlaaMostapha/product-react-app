import React from "react";
import Menu from "@material-ui/core/Menu";
import Fade from "@material-ui/core/Fade";
import IconButton from "@material-ui/core/IconButton";

export default function FadeMenu(props) {
  const { id, iconType, ...rest } = props;
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <div>
      <IconButton
        aria-controls="menu-appbar"
        aria-haspopup="true"
        onClick={handleMenu}
        color="inherit"
        {...rest}
      >
        {iconType}
      </IconButton>
      <Menu
        id={id}
        anchorEl={anchorEl}
        getContentAnchorEl={null}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "center",
        }}
        keepMounted
        transformOrigin={{
          vertical: "top",
          horizontal: "center",
        }}
        open={open}
        onClose={handleClose}
        TransitionComponent={Fade}
      >
        {props.items}
      </Menu>
    </div>
  );
}
