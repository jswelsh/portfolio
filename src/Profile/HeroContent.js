import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import { Container, Typography, Paper, Divider } from "@material-ui/core";

import avatar_dark from './Avatar_dark.svg'
import avatar_light from './Avatar_light.svg'

const useStyles = makeStyles((theme) => ({
  heroContent: {
    padding: theme.spacing(8, 0, 5),
    backgroundColor: theme.palette.primary.dark 

  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
  avatar: {
    width:200,
    height:200
  },
  circle: {
    margin:'auto',
    // opacity: '25%',
    // background: 'white',
    background: 'lavender',
    borderRadius: '50%',
    width: 220,
    height: 220,
  },
  caption:{
    margin: theme.spacing(4)
  }
}));

function HeroContent({
  darkState
}) {
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
          James Welsh
        </Typography>
        <Paper className={classes.circle}>
          {
          darkState
          ? <img src={avatar_dark} className={classes.avatar}/>
          : <img src={avatar_light} className={classes.avatar}/>
          }        </Paper>
        <Typography
          className={classes.caption}
          variant="h5"
          align="center"
          color="textSecondary"
          paragraph>
            I spend most of my free time working on coding projects, reading forums or articles on either tech, UI/UX or very obscure oddities throughout history. I truly am a sucker for going down the rabbit hole...
        </Typography>
      </Container>
    </div>
  );
}
export { HeroContent }