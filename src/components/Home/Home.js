import React from "react";
import useStyles from "./styles";
import stockCarImage from "../../assets/stockCarImage.jpg";
import housesStockImage from "../../assets/housesStockImage.jpg";
import { Container, Grid, Grow } from "@material-ui/core";
import HomePosts from "../HomePosts/HomePosts";
import { TopCarPosts, TopRealEstatePosts } from "../HomePosts/HomePosts";
import PopularInAutomotives from '../PopularPostsInCategory/PopularInAutomotives'
import PopularInRealEstate from '../PopularPostsInCategory/PopularInRealEstate'

function Home() {
  const classes = useStyles();

  return (
    <div>
      <div className={classes.header}>
        <Grow in>
          <Container>
            <Grid
              container
              justifyContent="space-between"
              spacing={5}
              alignItems="center"
            >
              <Grid item xs={12} md={4}>
                <div className={classes.headerText}>
                  Join the Millions of People Already Listing on Kijanka.
                </div>
              </Grid>
              <Grid item xs={12} md={4}>
                <div className={classes.imageOverlay}>
                  <h2 className={classes.centeredText}>Shop Cars</h2>
                  <img
                    className={classes.headerImage}
                    src={stockCarImage}
                    alt="Car"
                  />
                </div>
              </Grid>
              <Grid item xs={12} md={4}>
                <div className={classes.imageOverlay}>
                  <h2 className={classes.centeredText}>Shop Homes</h2>
                  <img
                    className={classes.headerImage}
                    src={housesStockImage}
                    alt="House"
                  />
                </div>
              </Grid>
            </Grid>
          </Container>
        </Grow>
      </div>
      <div>
        <Grow in>
          <Container>
            <Grid container spacing={0}>
              <h2 className={classes.titleText}>Top Posts</h2>
              <HomePosts />
            </Grid>
          </Container>
        </Grow>
      </div>
      <div>
        <Grow in>
          <Container>
            <Grid container spacing={4}></Grid>
          </Container>
        </Grow>
      </div>
      <div>
        <Grow in>
          <Container>
            <Grid container spacing={3}>
              <h2 className={classes.otherTitleText}>Popular in Automotives</h2>
              <PopularInAutomotives />
            </Grid>
          </Container>
        </Grow>
      </div>
      <div>
        <Grow in>
          <Container>
            <Grid container spacing={0}>
              <h2 className={classes.otherTitleText}>Top Car Posts</h2>
              <TopCarPosts />
            </Grid>
          </Container>
        </Grow>
      </div>
      <div>
        <Grow in>
          <Container>
            <Grid container spacing={3}>
              <h2 className={classes.otherTitleText}>Popular in Real Estate</h2>
              <PopularInRealEstate />
            </Grid>
          </Container>
        </Grow>
      </div>
      <div>
        <Grow in>
          <Container>
            <Grid container spacing={0}>
              <h2 className={classes.otherTitleText}>Top Real Estate Posts</h2>
              <TopRealEstatePosts />
            </Grid>
          </Container>
        </Grow>
      </div>
    </div>
  );
}

export default Home;
