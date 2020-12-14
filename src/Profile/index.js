import { useEffect, useState } from "react";
import { makeStyles } from '@material-ui/core/styles'

import { HeroContent } from './HeroContent'
import { Container, Grid } from "@material-ui/core"

import { Footer } from '../Footer'

import axios from 'axios';

const useStyles = makeStyles((theme) => ({
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  root: {
    flexGrow:1
  },
}));

const gitHubUrl ='https://api.github.com/users/jswelsh'
// const fetchGitHubData = axios.get(gitHubUrl);


/* 
*/


const Profile = ({
  darkState
}) => {

  const [gitHubData, setGitHubData] = useState();
  useEffect(() => {    
    axios.get(gitHubUrl)
    .then(function (response) {
      // handle success
      setGitHubData(response)
      // console.log(response);
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    })

      axios.get('https://api.github.com/users/jswelsh/repos')
      .then(function (response) {
        console.log(response.data.reduce(function(countMap, obj) {countMap[obj.language] = ++countMap[obj.language] || 1;return countMap}, {}));
/*         response.data.forEach(element => {
          console.log(element.language, element.name)
        }); */
      })
      .catch(function (error) {
        // handle error
        console.log(error);
    })
  },[]);
  const classes = useStyles();
  return (
    <>
      <main className={classes.root}>
        {/* Hero unit */}
        <HeroContent
          gitHubData={gitHubData}
          darkState={darkState}/>
        <Container className={classes.cardGrid} maxWidth="md">
          {/* End hero unit */}
{/*           <Grid 
            container 
            justify="center"
            spacing={4}>
            {charts.map((chart) =>
            <Grid
              item
              key={project.header}
              xs={12}
              sm={12}
              md={4}
              lg={4}>
              <ChartCard 
                technologies={project.technologies}
                header={project.header}
                image={project.image}
                demo={project.demo}
                repo={project.repo}/>
            </Grid>)}
          </Grid>*/}
        </Container>
      </main>
      <Footer />
    </>
  );
}


export { Profile }