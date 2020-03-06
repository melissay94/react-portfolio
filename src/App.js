import React, { useState } from 'react';
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

function App() {

  const [posts, setPosts] = useState([]);

  return (
    <Router>
      <div className="App">
        <nav>
          <span><Link to="/home">Home</Link></span>
          <span><Link to="/projects">Projects</Link></span>
          <span><Link to="/blog">Blog</Link></span>
          <span><Link to="/about">About</Link></span>
        </nav>
      </div>
      <Route path="/home" render={() => <Home />} />
      <Route path="/projects" render={() => <Projects />} />
      <Route path="/blog" render={() => <Blog posts={posts}/>} />
      <Route path="/about" render={() => <About />} />
    </Router>
  );
}

export default App;
