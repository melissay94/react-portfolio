import React, { useState } from 'react';
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import {
  BrowserRouter as Router,
  Route,
  Link
} from "react-router-dom";
import './App.css';
import Home from "./Home.js";
import Projects from "./Projects.js";
import Blog from "./Blog.js";
import About from "./About.js";

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
    marginBottom: "1em"
  }
});

function App() {

  const [posts, setPosts] = useState([]);
  const [tabIndex, setTabIndex] = useState(0);

  const classes = useStyles();

  const handleChange = (e, tabIndex) => {
    setTabIndex(tabIndex);
  }

  // Logic for combining tab and link: https://stackoverflow.com/questions/37843495/material-ui-adding-link-component-from-react-router

  return (
    <Router>
      <div className="App">
        <Paper className={classes.root}>
          <Tabs
            value={tabIndex}
            onChange={handleChange}
            indicatorColor="secondary"
            textColor="inherit"
            centered>
              <Tab 
                label="Home"
                component={Link}
                to="/home"/>
              <Tab label="Project"
                component={Link}
                to="/projects"/>
              <Tab label="Blog"
                component={Link}
                to="/blog"/>
              <Tab label="About"
                component={Link}
                to="/about"/>
            </Tabs>
        </Paper>
      </div>
      <Route path="/home" render={() => <Home />} />
      <Route path="/projects" render={() => <Projects />} />
      <Route path="/blog" render={() => <Blog posts={posts}/>} />
      <Route path="/about" render={() => <About />} />
    </Router>
  );
}

export default App;
