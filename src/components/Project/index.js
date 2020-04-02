import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { Container } from '@material-ui/core';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Slide from '@material-ui/core/Slide';
// import Box from '@material-ui/core/Box';
// import Fab from '@material-ui/core/Fab';
// import NavIcon from '@material-ui/icons/Navigation';

require('./style.css');

const epiqlogo = require('./Picture1.png');
const zoelogo = require('./Picture2.png');
const yarnlogo = require('./Picture3.png');

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  media: {
    height: 140,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

export default function CenteredGrid() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
    <Container>
    <h1 id="projectheader">Recent Projects</h1>
    </Container>
    <Container id="snapshots">
      <Grid container spacing={3}>
      <Slide direction="up" in={true} mountOnEnter unmountOnExit>
        <Grid item xs={4}>
            <Card className={classes.root}>
                <CardActionArea className="background">
                    <CardMedia
                    className={classes.media}
                    image={zoelogo}
                    title="Zoe"
                    />
                    <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        Zoe
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                     ZOE offers tutorials, teacher development, and visual programming tools including in-VR creation software.
                    </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    <Button size="small" id="lrnmore" color="primary">
                    In Progress
                    </Button>
                </CardActions>
            </Card>
        </Grid>
        </Slide>
        <Slide direction="up" in={true} mountOnEnter unmountOnExit>
        <Grid item xs={4}>
            <Card className={classes.root}>
                <CardActionArea className="background">
                    <CardMedia
                    className={classes.media}
                    image={yarnlogo}
                    title="Yarn"
                    />
                    <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        Yarn
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                    Yarn is the interactive micro-storytelling platform that provides fictional stories on your phone with the tap of a finger.
                    </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    <Button size="small" color="primary" id="lrnmore" href="https://github.com/PeteRydell/yarn-admin">
                    Learn More
                    </Button>
                </CardActions>
            </Card>
        </Grid>
        </Slide>
        <Slide direction="up" in={true} mountOnEnter unmountOnExit>
        <Grid item xs={4}>
            <Card className={classes.root}>
                <CardActionArea className="background">
                    <CardMedia
                    className={classes.media}
                    image={epiqlogo}
                    title="Epiq Automotive"
                    />
                    <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        Epiq Automotive
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        Epiq Automotive is a premier, Montrose-based automotive repair shop providing quality service for every type of vehicle.
                    </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    <Button size="small" color="primary" id="lrnmore" href="https://github.com/PeteRydell/epiq-automotive">
                    Learn More
                    </Button>
                </CardActions>
            </Card>
        </Grid>
        </Slide>
      </Grid>
        <Grid item xs={12}>
        </Grid>
      </Container>
    </div>
  );
}