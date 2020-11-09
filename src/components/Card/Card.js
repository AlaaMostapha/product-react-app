import React from 'react';
import "./Card.scss";
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';


const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});

export default function MediaCard({title,discription,img,alt,btn}) {
  const classes = useStyles();

  return (
    <Card className={classes.root} >
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={img} alt={alt}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2" className="limitCharacters">
            {title}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p" className="limitCharacters">
            {discription}
          </Typography>
        </CardContent>
      </CardActionArea>
    {btn?btn:""}
    </Card>
  );
}
