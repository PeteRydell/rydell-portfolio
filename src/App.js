import React from 'react';
import './App.css';
import Nav from './components/Nav';
import Main from './components/Main';
import { Container } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';
import About from './components/About';
import Project from './components/Project';
import Footer from './components/Footer';
import MoreAbout from './components/MoreAbout'
import ContactForm from './components/ContactForm'
import { render } from "react-dom"
import { Router } from "@reach/router"

const App = ({ children }) => (
  <div>
  <Nav />
  <Router>
    <Home path="/" />
    <Bio path="about" />
    {/* <Contact path="contact" /> */}
  </Router>
  <Footer />
  </div>
);

const Home = () => (
  <div>
        <Container>
          <Grid>
              <Grid item xs={12}>
                <Main />
                <Divider id="line"/>
              </Grid>
          </Grid>
        </Container>
        <About />
        <Project />
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

const Contact = () => (
  <div>
    <Container>
      <Grid item xs={12}></Grid>
      <Grid item xs={12}>
        <ContactForm />
      </Grid>
    </Container>
  </div>
);


render(<App />, document.getElementById("root"));
export default App;