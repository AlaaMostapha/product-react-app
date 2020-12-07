import React from "react";
import { useStyles } from "./style";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import LoadingIndicator from "../LoadingIndicator/LoadingIndicator";

export default function MediaControlCard({
  title,
  img,
  quantityComp,
  deleteBtn,
}) {
  const classes = useStyles();
  return (
    <Card className={classes.root}>
      {img ? (
        <CardMedia
          className={classes.cover}
          image={img}
          title="Live from space album cover"
        />
      ) : (
        <LoadingIndicator />
      )}
      <div>
        <CardContent className={classes.content}>
          <Typography component="h5" variant="h5">
            {title}
          </Typography>

          <div style={{ textAlign: "center", display: "flex" }}>
            {quantityComp ? quantityComp : ""}
            {{ deleteBtn } ? deleteBtn : ""}
          </div>
        </CardContent>
      </div>
    </Card>
  );
}
