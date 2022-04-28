import React from "react";
import useStyles from "./styles";
import { Container, Grid, Grow } from "@material-ui/core";

function Home() {
  const classes = useStyles();

  return (
    <div className={classes.header}>
      <Grow in>
        <Container>
          <Grid container justifyContent="space-between" spacing={3}>
              <Grid item xs={12} md={4}>
                <div className={classes.headerText}>
                Join the Millions of People Listing on Kijanka.
                </div>
              </Grid>
          </Grid>
        </Container>
      </Grow>
    </div>
  );
}

export default Home;
