import React from 'react';
import SearchBar from '../SearchBar/search-bar.component';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  textContainer: {
    alignSelf: 'center'
  },
  title: {
    flexGrow: 1
  }
}));

const Header = () => {
  const classes = useStyles();

  return (
    <AppBar position="static">
      <Toolbar className={classes.textContainer}>
        <Typography variant="h6" className={classes.title}>
          To-Do App
        </Typography>
      </Toolbar>
      {/* <SearchBar /> */}
    </AppBar>
  );
};

export default Header;
