import { makeStyles } from '@material-ui/core/styles';

import { CardHeader, Card, CardContent, CardMedia, Button } from "@material-ui/core";
import { TechChip } from './TechChip'

const useStyles = makeStyles((theme) => ({
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  cardContent: {
    flexGrow: 1,
  },
  Button:{
    margin:5
  }
}));

function ProjectCard({
  darkState,
  technologies,
  header,
  image,
  demo,
  repo
}) {
  const classes = useStyles();
  console.log(darkState)
  return (
    <Card className={classes.card}>
      <CardHeader
        title={header}
        titleTypographyProps={{
          align: 'left',
          variant: "h5"
        }}
        action={
        <>
        {
        demo
        ? <Button
            className={classes.Button}
            size="large"
            color="primary"
            variant="contained"
            target="_blank"
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
            target="_blank"
            href={repo}>
            Repo
          </Button>
        </>}
      />
      {image(darkState)}
      <CardContent className={classes.cardContent}>
        {technologies.map(technology =>
        <TechChip 
          icon={technology.icon}
          label={technology.label}
          svg={technology.svg}
          svgAlt={technology.svgAlt}
          />)}
      </CardContent>
    </Card>);
    }
export { ProjectCard }