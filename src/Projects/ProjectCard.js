import { makeStyles } from '@material-ui/core/styles';

import { CardHeader, List, Card, CardContent, CardMedia, Button } from "@material-ui/core";
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
}));

function ProjectCard({}) {
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <CardHeader
        title='Heading' 
        titleTypographyProps={{
          align: 'left',
          variant: "h4"
        }}
        /* avatar={avatar} */
        action={
        <Button 
          size="large"
          color="secondary" 
          variant="outlined" 
          href="https://resume.creddle.io/resume/du4st9n0u9e">
            View
        </Button>} 
      />
      <CardMedia className={classes.cardMedia} image="https://source.unsplash.com/random" title="Image title" />
      <CardContent className={classes.cardContent}>
        <List>
          <TechChip />
        </List>
      </CardContent>
    </Card>);
    }
export { ProjectCard }