import React from 'react';

import { makeStyles } from '@material-ui/core/styles';

import { Link } from "react-router-dom";
import { Typography, Toolbar, AppBar, Menu, MenuItem ,IconButton } from "@material-ui/core";
import GitHubIcon from '@material-ui/icons/GitHub';
import AppsIcon from '@material-ui/icons/Apps';
import Brightness7Icon from '@material-ui/icons/Brightness7';
import Brightness4Icon from '@material-ui/icons/Brightness4';

export const useStyles = makeStyles((theme) => ({
  icon: {
    marginRight: theme.spacing(2),
  },
  toolbarButtons: {
    marginLeft: 'auto',
  },
}));

const NavBar = ({
  darkState,
  handleThemeChange
}) => {
  const [anchorEl, setAnchorEl] = React.useState/* <null | HTMLElement> */(null);
  const open = Boolean(anchorEl);

  const handleMenu = (event/* : React.MouseEvent<HTMLElement> */) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };


  const classes = useStyles();
  return (
    <AppBar position="static">
      <Toolbar>
        <IconButton
          aria-label="account of current user"
          aria-controls="menu-appbar"
          aria-haspopup="true"
          onClick={handleMenu}
          color="inherit"
        >
          <AppsIcon />
        </IconButton>
        <Menu
          id="menu-appbar"
          anchorEl={anchorEl}
          anchorOrigin={{
            vertical: 'top',
            horizontal: 'right'}}
          keepMounted
          transformOrigin={{
            vertical: 'top',
            horizontal: 'right'}}
          open={open}
          onClose={handleClose}>
          <MenuItem 
            component={Link}
            to={'/projects'}
            onClick={handleClose}>Projects</MenuItem>
          <MenuItem 
            onClick={handleClose}>Something</MenuItem>
        </Menu>

        <Typography variant="h5">
          James Welsh
        </Typography>
        <div className={classes.toolbarButtons}>
          <IconButton onClick={() => handleThemeChange()}>
            {darkState ? <Brightness4Icon/> : <Brightness7Icon/>}
          </IconButton>
          <IconButton>
            <GitHubIcon 
              fontSize={'large'} 
              onClick={() =>  window.location.href='https://github.com/jswelsh'}/>
          </IconButton>
        </div>
      </Toolbar>
    </AppBar>
  );
}


export { NavBar }