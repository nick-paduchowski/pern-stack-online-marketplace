import React from "react";
import { Grid } from "@material-ui/core";
import useStyles from "./styles.js";
import imagePlaceholder from "../../assets/imagePlaceholder.jpg";

import { Card, CardContent, CardMedia, Typography } from "@mui/material";

const defaultPostArray = [1, 2, 3, 4, 5];

function HomePosts() {
  const classes = useStyles();

  return (
    <Grid container spacing={3}>
      {defaultPostArray.map((post) => {
        return (
          <Grid item className={classes.defaultPost}>
            <Card>
              <CardMedia
                component="img"
                height="140"
                image={imagePlaceholder}
                alt="Image placeholder."
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Example Post
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  This is an example post. This post should be replaced.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        );
      })}
    </Grid>
  );
}

export function TopCarPosts() {
  const classes = useStyles();

  return (
    <Grid container spacing={3}>
      {defaultPostArray.map((post) => {
        return (
          <Grid item className={classes.defaultPost}>
            <Card>
              <CardMedia
                component="img"
                height="140"
                image={imagePlaceholder}
                alt="Image placeholder."
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Example Post
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  This is an example post. This post should be replaced.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        );
      })}
    </Grid>
  );
}

export function TopRealEstatePosts () {
  const classes = useStyles();

  return (
    <Grid container spacing={3}>
      {defaultPostArray.map((post) => {
        return (
          <Grid item className={classes.defaultPost}>
            <Card>
              <CardMedia
                component="img"
                height="140"
                image={imagePlaceholder}
                alt="Image placeholder."
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Example Post
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  This is an example post. This post should be replaced.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        );
      })}
    </Grid>
  );
}

export default HomePosts;
