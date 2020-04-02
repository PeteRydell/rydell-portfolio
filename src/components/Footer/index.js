import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import TwitterIcon from '@material-ui/icons/Twitter';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import EmailIcon from '@material-ui/icons/Email';
import Grid from '@material-ui/core/Grid';
import Link from '@material-ui/core/Link';

require('./style.css');

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
  },
  stickToBottom: {
    width: '100%',
    position: 'fixed',
    height: 75,
    bottom: 0,
  },
});

export default function SimpleBottomNavigation() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  
  return (
    <BottomNavigation
      value={value}
      showLabels
      className={classes.root}
      className={classes.stickToBottom}>
    >
    <div className="copyright">
        <Grid container spacing={6}>
            <Grid item xs={12}>
                <Link href="https://github.com/PeteRydell">
                    <GitHubIcon className= "icon" color="disabled" />
                </Link>
                <Link href="https://twitter.com/Pete_Rydell">
                    <TwitterIcon className= "icon" color="disabled" />
                </Link>
                <Link href="https://www.linkedin.com/in/peterrydell/">
                    <LinkedInIcon className= "icon" color="disabled" />
                </Link>
                <Link href="mailto:peterydell@gmail.com">
                    <EmailIcon className= "icon" color="disabled" />
                </Link>
                <p>Copyright © 2020 Pete Rydell • Los Angeles based Freelance Web Designer & Developer</p>
            </Grid>
        </Grid>
    </div>
    </BottomNavigation>
  );
}




