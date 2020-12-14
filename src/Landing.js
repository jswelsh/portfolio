import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import { Container, Typography, Paper } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  heroContent: {
    padding: theme.spacing(8, 0, 5),
    backgroundColor: theme.palette.primary.dark 

  },
}));

function Landing({}) {
  const classes = useStyles();

  return (

      <Paper className={classes.heroContent}>
        <Typography
          component="h1"
          variant="h2"
          align="center"
          color="textPrimaryDark"
          gutterBottom>
          James Welsh
        </Typography>
      </Paper>

  );
}
export { Landing }