import React from "react";
import { useStyles } from "./style";
import {
  Card,
  CardContent,
  CardActions,
  CardMedia,
  CardActionArea,
} from "@material-ui/core";
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
      <CardActionArea>
        {img ? (
          <CardMedia
            className={classes.cover}
            image={img}
            title="Live from space album cover"
          />
        ) : (
          <LoadingIndicator />
        )}
      </CardActionArea>
      <CardContent className={classes.content}>
        <Typography component="h5" variant="h5">
          {title}
        </Typography>
        <CardActions>
          <div style={{ textAlign: "center", display: "flex" }}>
            {quantityComp ? quantityComp : ""}
            {{ deleteBtn } ? deleteBtn : ""}
          </div>
        </CardActions>
      </CardContent>
    </Card>
  );
}
