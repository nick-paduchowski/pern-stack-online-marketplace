import React from "react";
import { Container, Grid, Grow } from "@material-ui/core";
import useStyles from "./styles";
import sedan from '../../assets/popularInAutomotives/sedan.jpg'
import suv from '../../assets/popularInAutomotives/suv.jpg'
import pickuptruck from '../../assets/popularInAutomotives/pickuptruck.jpg'
import heavyequipment from '../../assets/popularInAutomotives/heavyequipment.jpg'


function PopularInAutomotives() {
  const classes = useStyles();

  return (
    <Grow in className={classes.divBackground}>
      <Container>
        <Grid container spacing={0}>
          <Grid item xs={12} md={3}>
            <div className={classes.imageOverlay}>
              <h2 className={classes.centeredText}>Shop Sedans</h2>
              <img
                className={classes.headerImage}
                src={sedan}
                alt="Car"
              />
            </div>
          </Grid>
          <Grid item xs={12} md={3}>
            <div className={classes.imageOverlay}>
              <h2 className={classes.centeredText}>Shop SUVs</h2>
              <img
                className={classes.headerImage}
                src={suv}
                alt="Car"
              />
            </div>
          </Grid>
          <Grid item xs={12} md={3}>
            <div className={classes.imageOverlay}>
              <h2 className={classes.centeredText}>Shop Pickup Trucks</h2>
              <img
                className={classes.headerImage}
                src={pickuptruck}
                alt="Car"
              />
            </div>
          </Grid>
          <Grid item xs={12} md={3}>
            <div className={classes.imageOverlay}>
              <h2 className={classes.centeredText}>Shop Heavy Equipment</h2>
              <img
                className={classes.headerImage}
                src={heavyequipment}
                alt="Car"
              />
            </div>
          </Grid>
        </Grid>
      </Container>
    </Grow>
  );
}

export default PopularInAutomotives;
