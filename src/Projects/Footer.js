import { makeStyles } from '@material-ui/core/styles';
import { Typography } from "@material-ui/core";
import { GitHub } from "@material-ui/icons";
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import Icon from '@mdi/react';
import { LinkItem } from './LinkItem'

export const useStyles = makeStyles((theme) => ({
  footer: {
    padding: theme.spacing(6),
  },
}));
const links = [
  {
    label: 'Github',
    link: 'https://github.com/jswelsh',
    icon: <GitHub />
  },
  {
    label: 'Email',
    link: 'mailto:james.sinclair.welsh@gmail.com',
    icon: <MailOutlineIcon/>
  }
]

function Footer() {
  const classes = useStyles();

  return (
    <footer className={classes.footer}>
      <Typography variant="h6" align="center" gutterBottom>
        James Welsh
    </Typography>
      {links.map(item => 
        <LinkItem 
        label= {item.label}
        link= {item.link}
        icon= {item.icon}
        />)}
        
    </footer>
  );
}
  export { Footer }