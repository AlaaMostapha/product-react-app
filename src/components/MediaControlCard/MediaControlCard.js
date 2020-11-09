import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import LoadingIndicator from '../LoadingIndicator/LoadingIndicator'; 
const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  details: {
    display: 'flex',
    flexDirection: 'column',
  },
  content: {
    flex: '1 0 auto',
  },
  cover: {
    width: 151,
  },
  controls: {
    display: 'flex',
    alignItems: 'center',
    paddingLeft: theme.spacing(1),
    paddingBottom: theme.spacing(1),
  },
  playIcon: {
    height: 38,
    width: 38,
  },
}));

export default function MediaControlCard({title,img,quantityComp,deleteBtn}) {
  const classes = useStyles();


  return (
    <Card className={classes.root}>
        {img?<CardMedia
        className={classes.cover}
        image={img}
        title="Live from space album cover"
      />:<LoadingIndicator/>}
      <div>
        <CardContent className={classes.content}>
          <Typography component="h5" variant="h5">
            {title}
          </Typography>
         
           <div style={{textAlign:"center",display:"flex"}}>
               {(quantityComp)?quantityComp:""}
             {{deleteBtn}?deleteBtn:""}
           </div>
        </CardContent>
       
      </div>
     
    </Card>
  );
}
