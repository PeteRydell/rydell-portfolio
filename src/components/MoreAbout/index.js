import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import { Container } from '@material-ui/core';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import Grid from '@material-ui/core/Grid';
import Slide from '@material-ui/core/Slide';

require('./style.css');

      const useStyles = makeStyles(theme => ({
        root: {
          display: 'flex',
          '& > *': {
            margin: theme.spacing(1),
          },
        },
        large: {
          width: theme.spacing(30),
          height: theme.spacing(30),
        },
      }));
      
      export default function RecipeReviewCard() {
        const classes = useStyles();
        const [expanded, setExpanded] = React.useState(false);
        const teddy = require('./TeddyRound.png');
        const sewanee = require('./SewaneeRound.png');
        const la = require('./LARound.png');

      
        return (
            <Slide direction="right" in={true} mountOnEnter unmountOnExit>
            <Container id="about">
                <Card id="aboutcard">
                <h1 className="text">About Me</h1>
                    <Grid container spacing={2}>
                        <Grid item xs={4}>
                            <div className={classes.root} id="avatar">
                                <Avatar alt="Teddy" src={teddy} className={classes.large} />
                            </div>
                        </Grid>
                        <Grid item xs={4}>
                            <div className={classes.root} id="avatar">
                                <Avatar alt="Sewanee" src={sewanee} className={classes.large} />
                            </div>
                        </Grid>
                        <Grid item xs={4}>
                            <div className={classes.root} id="avatar">
                                <Avatar alt="Los Angeles" src={la} className={classes.large} />
                            </div>
                        </Grid>
                    </Grid>
                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                            <p className="text">
                            Hi! My name is Peter Rydell and I'm a freelance coder living in Los Angeles, CA.
                            <br></br>
                            <br></br>
                            After graduating from Sewanee in 2014 with a Bachelor’s in International and Global Studies, I spent 4 years living in Washington, DC as a PR and Communications consultant with Weber Shandwick. In 2018 I moved out to LA, transitioning into consumer tech, and working on behalf of clients including Sony Electronics, Riot Games and the Call of Duty League among others. 
                            <br></br>
                            <br></br>
                            In 2019 I took my passion for coding into the classroom at UCLA. Throughout my time there and beyond I've assisted a multitude of clients with web design and development, wireframes, UI, administrative solutions, WYSIWYG tools, education programs and more.
                            <br></br>
                            <br></br>
                            I'm a Clevelander at heart, a big-time Browns fan and dog lover. I'm into food, lacrosse, and making all sorts of things.
                            <br></br>
                            </p>
                        </Grid>
                    </Grid>
                </Card>
            </Container>
            </Slide>
        );
      }