import { makeStyles } from '@material-ui/core/styles';

import { CardHeader, Card, CardContent, CardMedia, Button } from "@material-ui/core";
import {TechChip} from './TechChip'

const useStyles = makeStyles((theme) => ({
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  cardMedia: {
    paddingTop: '56.25%', // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
  Button:{
    margin:5
  }
}));

function ProjectCard({
  header,
  technologies,
  demo,
  repo
}) {
  const classes = useStyles();
  console.log(header)
  return (
    <Card className={classes.card}>
      <CardHeader
        title={header}
        titleTypographyProps={{
          align: 'left',
          variant: "h4"
        }}
        /* avatar={avatar} */
        action={
          <>
        {
        demo
        ? <Button
                  className={classes.Button}
                  size="large"
                  color="primary" 
                  variant="contained" 
                  href={demo}>
                    Demo
                </Button>
        : null
        }
        <Button 
          className={classes.Button}
          size="large"
          color="secondary" 
          variant="outlined" 
          href={repo}>
            Repo
        </Button>
        </>
        } 

      />
      <CardMedia className={classes.cardMedia} image="https://source.unsplash.com/random" title={header} />
      <CardContent className={classes.cardContent}>
          {technologies.map(technology =>
          <TechChip 
          icon={technology.icon}
          label={technology.label}/>)}
      </CardContent>
    </Card>);
    }
export { ProjectCard }