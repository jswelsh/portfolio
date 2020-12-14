import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import { Container, Typography, Paper } from "@material-ui/core";
import { LanguageGraph } from './LanguageGraph'


import avatar_dark from './Avatar_dark.svg'
import avatar_light from './Avatar_light.svg'
import zIndex from "@material-ui/core/styles/zIndex";

const useStyles = makeStyles((theme) => ({
/*   heroContent: {
    minHeight: 800,
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
    gridArea: '2 / 1 / 2 / 1',
    // opacity: '25%',
    // background: 'white',
    background: 'lavender',
    borderRadius: '50%',
    width: 220,
    height: 220,
  },
  caption:{
    margin: theme.spacing(4)
  },
  parent:{
    display: 'grid',
    gridTemplateColumns: '250px 1fr',
    gridTemplateRows: '150px 1fr'
  },
  child:{
      gridArea: '1 / 1 / 2 / 2'
  } */
  heroContent: {
    // minHeight: 800,
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
    zIndex:'4',
    gridArea: '1 / 1 / 2 / 2',
    // opacity: '25%',
    // background: 'white',
    background: 'lavender',
    borderRadius: '50%',
    width: 220,
    height: 220,
  },
  caption:{
    margin: theme.spacing(4)
  },
  parent:{
    display: 'grid',
    gridTemplateColumns: '1fr',
    gridTemplateRows: '1fr',
    gridColumnGap: 0,
    gridRowGap: 0,
  },
  child:{
      gridArea: '1 / 1 / 2 / 2',
      zIndex:'3'
  },
  childTwo:{
    paddingTop: '100',
    gridArea: '1 / 1 / 4 / 2',
    zIndex:'4'
}
}));

function HeroContent({
  gitHubData,
  darkState
}) {
  const classes = useStyles();

  return (
    <div className={classes.heroContent}>
      <Container maxWidth="md">
        <div className={classes.parent}>

        <Paper className={classes.circle}>
          
          {
            darkState
            ? <img src={avatar_dark} className={classes.avatar}/>
            : <img src={avatar_light} className={classes.avatar}/>
          }        
        </Paper>
        <div className={classes.child}>
          <LanguageGraph />
        </div>
        <div className={classes.childTwo}>
        <Typography
          component="h1"
          variant="h2"
          align="center"
          color="textPrimaryDark"
          gutterBottom>
          James Welsh
        </Typography>
        <Typography
          className={classes.caption}
          variant="h6"
          align="center"
          color="textSecondary"
          paragraph>
            Full Stack Developer, located in Raincouver, BC. Making neat things for the web, bugs and all
        </Typography>
        <Typography> Location: {gitHubData && gitHubData.data.location} </Typography>
        <Typography> Public repos: {gitHubData && gitHubData.data['public_repos']}</Typography>
        </div>
        </div>
      </Container>

    </div>
  );
}
export { HeroContent }