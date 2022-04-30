import React from 'react'
import { Container, Grid, Grow } from "@material-ui/core";
import useStyles from "./styles";
import house from '../../assets/popularInRealEstate/house.jpg'
import apartments from '../../assets/popularInRealEstate/apartments.jpg'
import condos from '../../assets/popularInRealEstate/condos.jpg'
import land from '../../assets/popularInRealEstate/land.jpg'

function PopularInRealEstate() {

    const classes = useStyles()

  return (
    <Grow in className={classes.divBackground}>
      <Container>
        <Grid container spacing={0}>
          <Grid item xs={12} md={3}>
            <div className={classes.imageOverlay}>
              <h2 className={classes.centeredText}>Shop Houses</h2>
              <img
                className={classes.headerImage}
                src={house}
                alt="house"
              />
            </div>
          </Grid>
          <Grid item xs={12} md={3}>
            <div className={classes.imageOverlay}>
              <h2 className={classes.centeredText}>Shop Apartments</h2>
              <img
                className={classes.headerImage}
                src={apartments}
                alt="apartment buildings"
              />
            </div>
          </Grid>
          <Grid item xs={12} md={3}>
            <div className={classes.imageOverlay}>
              <h2 className={classes.centeredText}>Shop Condos</h2>
              <img
                className={classes.headerImage}
                src={condos}
                alt="condo building"
              />
            </div>
          </Grid>
          <Grid item xs={12} md={3}>
            <div className={classes.imageOverlay}>
              <h2 className={classes.centeredText}>Shop Land</h2>
              <img
                className={classes.headerImage}
                src={land}
                alt="landscape"
              />
            </div>
          </Grid>
        </Grid>
      </Container>
    </Grow>
  )
}

export default PopularInRealEstate