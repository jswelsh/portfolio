import { makeStyles } from '@material-ui/core/styles';
import { Typography } from "@material-ui/core";
import { links } from './../data'
import { LinkItem } from './LinkItem'

export const useStyles = makeStyles((theme) => ({
  footer: {
    padding: theme.spacing(6),
  },
}));

function Footer() {
  const classes = useStyles();
  return (
    <footer className={classes.footer}>
      <Typography variant="h6" align="center" gutterBottom>
        James Welsh
    </Typography>

      {links.map(item => 
        <LinkItem 
          key= {item.label}
          label= {item.label}
          link= {item.link}
          icon= {item.icon}/>)}
    </footer>
  );
}
  export { Footer }