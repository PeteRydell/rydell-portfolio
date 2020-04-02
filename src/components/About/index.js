import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import { Container } from '@material-ui/core';
import Avatar from '@material-ui/core/Avatar';
import Box from '@material-ui/core/Box';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import Grid from '@material-ui/core/Grid';
import Slide from '@material-ui/core/Slide';
import { Router, Link, Match } from "@reach/router"
import MoreAbout from '../MoreAbout'
import { render } from "react-dom"

require('./style.css');

      const useStyles = makeStyles(theme => ({
        root: {
          display: 'flex',
          '& > *': {
            margin: theme.spacing(1),
          },
        },
        large: {
          width: theme.spacing(40),
          height: theme.spacing(40),
        },
      }));

      const NavLink = props => (
        <Link
          {...props}
          getProps={({ isCurrent }) => {
            // the object returned here is passed to the
            // anchor element's props
            return {
              style: {
                color: isCurrent ? "white" : "gray"
              }
            };
          }}
        />
      );
      
      export default function RecipeReviewCard() {
        const classes = useStyles();
        const [expanded, setExpanded] = React.useState(false);
        const image = require('./BeachRound.png');
      
        return (
            <Slide direction="right" in={true} mountOnEnter unmountOnExit>
            <Container id="about">
                <Card id="aboutcard">
                <Grid container spacing={2}>
                    <Grid item xs={6}>
                        <h1 className="text">A Bit About Me</h1>
                        <p className="text">
                        Hi! My name is Peter Rydell and I'm a freelance coder living in Los Angeles, CA.
                        <br></br>
                        <br></br>
                        I've spent most of my career as a PR and Communications consultant specializing in consumer technology and sports, and in 2019 I took my passion for coding into the classroom at UCLA. 
                        </p>
                        <Box id="morediv">
                            <Fab variant="extended" id="more">
                                <AddIcon className={classes.extendedIcon} />
                                <NavLink to="/about">A Bit More About Me</NavLink>
                            </Fab>
                        </Box>
                    </Grid>
                    <Grid item xs={1}></Grid>
                    <Grid item xs={5}>
                        <div className={classes.root}>
                            <Avatar alt="Pete Rydell" src={image} className={classes.large} />
                        </div>
                    </Grid>
                </Grid>
                </Card>
            </Container>
            </Slide>
        );
      };

      const App = props => (
        <div>
          <h1>Active Links</h1>
          <nav>
            <NavLink to="/">Home</NavLink> <NavLink to="/about">About</NavLink>
          </nav>
          {props.children}
        </div>
      );

      const Bio = () => (
        <div>
          <Container>
            <Grid item xs={12}></Grid>
            <Grid item xs={12}>
              <MoreAbout />
            </Grid>
          </Container>
        </div>
      );

      render(
        <Router>
          <App path="/">
            <Bio path="about" />
          </App>
        </Router>,
        document.getElementById("root")
      );

render(<App />, document.getElementById("root"));

