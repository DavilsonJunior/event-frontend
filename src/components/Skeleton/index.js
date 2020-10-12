import React from 'react';
import {
  Grid, Card, Box, makeStyles, CardActionArea, CardActions
} from '@material-ui/core';
import Skeleton from '@material-ui/lab/Skeleton';

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
    background: theme.palette.background.paper,
    borderRadius: 6,
  }
}));

function Media() {
  const classes = useStyles();
  return (
    <Grid item lg={4} sm={6} xs={12}>
      <Card className={classes.root}>
        <CardActionArea>
          <Skeleton variant="rect" height={250} />
        </CardActionArea>
        <Skeleton width="40%" animation={false} />
        <Skeleton width="20%" />
        <CardActions>
          <Skeleton width="30%" animation={false} height={50} />
          <Skeleton width="30%" />
          <Skeleton width="30%" height={50} />
        </CardActions>
      </Card>
    </Grid>
  );
}

export default function SkeletonComponent() {
  return (
    <>
      <Box mb={2}>
        <Skeleton variant="rect" width="30%" height={30} />
      </Box>

      <Grid container spacing={2}>
        <Media />
        <Media />
        <Media />
      </Grid>
    </>
  );
}
