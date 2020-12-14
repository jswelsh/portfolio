import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import { Container, Typography, Grid, Button } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  heroContent: {
    padding: theme.spacing(8, 0, 6),
    backgroundColor: theme.palette.primary.dark 

  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
}));

function HeroContent({}) {
  const classes = useStyles();

  return (
    <div className={classes.heroContent}>
      <Container maxWidth="sm">
        <Typography
          component="h1"
          variant="h2"
          align="center"
          color="textPrimaryDark"
          gutterBottom>
          My Projects
        </Typography>
        <Typography
          variant="h5"
          align="center"
          color="textSecondary"
          paragraph>
          A curated collection of my current projects, the scope of which ranges from small instances of functionality to comprehensive full fledge applications.
        </Typography>
{/*         <div className={classes.heroButtons}>
          <Grid
            container 
            spacing={2}
            justify="center">
            <Grid item>
              <Button
                variant="contained"
                color="primary"
                href="https://resume.creddle.io/resume/du4st9n0u9e">
                Resume
              </Button>
            </Grid>
            <Grid item>
              <Button
                variant="outlined"
                color="secondary">
                Contact
              </Button>
            </Grid>
          </Grid>
        </div> */}
      </Container>
    </div>
  );
}
export { HeroContent }