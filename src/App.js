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
import YeehawJS from "./YeehawJS.jpg";

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
    marginBottom: "1em"
  }
});

function App() {

  const [posts, setPosts] = useState([{
    title: "Thoughts and Feelings",
    body: "Oh JavaScript. The Backbone of the internet (pun intended). Anyone who's been on the internet has undoubtedly been touched by it. It's in your buttons, it's in your cool animations, heck, sometimes it's even in our servers. It's used diversely, and has so many tools, frameworks, and templates made with it every day. It's versitility is a blessing and a curse to it's developers. While there are guidelines and some rules in place to try and bring some order to it's existance of a whole, it's loosey goosey ways are still apparent in most code bases. For this reason, I refer to it as the Wild West of Programming. Organized attempts of civilization within a lawless land of 'anything goes'.",
    image: YeehawJS,
    date: "03/04/2020"
  }]);
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
