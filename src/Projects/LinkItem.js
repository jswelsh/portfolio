import React from "react";
import { Grid, Link, Typography } from "@material-ui/core";

function LinkItem({
  link,
  icon,
  label
}) {
  return (<Link color="inherit" href={link}>
    <Grid container spacing={2} justify="center" direction="row">
      <Grid item>
          {icon}
      </Grid>
      <Grid item>
        <Typography variant="subtitle1" align="center">
          {label}
        </Typography>
      </Grid>
    </Grid>
  </Link>);
}
  
export { LinkItem }