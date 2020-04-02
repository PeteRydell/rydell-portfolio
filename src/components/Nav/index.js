import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Hidden from '@material-ui/core/Hidden';
import { Container } from '@material-ui/core';
import { Router, Link } from "@reach/router";

require('./style.css');

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    margin: `${theme.spacing(1)}px auto`,
  },
  Button: {
    marginRight: theme.spacing(2),
    align: 'right',
  },
  title: {
    flexGrow: 1
  },
  toolbar: {
    margin: `${theme.spacing(1)}px auto`,
    justifyContent: "flex-center"
  }

}));



export default function () {
  const classes = useStyles();
  const logo = require('./FontLogo.png');

  return (
    <Container id="navbar">
      <Grid>
          <AppBar id="appbar" position="static">
            <Grid item xs={12}>
                <Button color="inherit"><Link to="/" class="navlink">Home</Link></Button>
                <Button color="inherit"><Link to="about" class="navlink">About</Link></Button>
                {/* <Button color="inherit">Portfolio</Button> */}
                {/* <Button color="inherit"> <Link to="contact" class="navlink">Contact</Link></Button> */}
            </Grid>
          </AppBar>
          <Hidden xsDown>
          <Box
            p={2}
            position="absolute"
            top={-8}
            left="5%"
          ><img id="logo" src={logo} alt="Logo" edge="start"/>
          </Box>
          </Hidden>
      </Grid>
    </Container>
  );
}

