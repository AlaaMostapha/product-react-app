import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
    },
  },
}));

export default function CreateButton(props) {
  const { color, text, href, onClick, ...rest } = props;
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Button
        variant="contained"
        color={color}
        href={href}
        onClick={onClick}
        {...rest}
      >
        {text}
      </Button>
    </div>
  );
}
