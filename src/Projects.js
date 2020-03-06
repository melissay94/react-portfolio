import React from "react";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import ChipList from "./ChipList";

const useStyles = makeStyles({
  root: {
    minWidth: 400,
    maxWidth: 800,
    margin: "0 auto",
    marginTop: "2em"
  }
});

function Projects(props) {
  const classes = useStyles();
  const projects = [
    {
      title: "Gradie's Grueling Grind",
      summary: "A rogue-like dungeon crawler created using PhaserJS. Play as Gradie, a poor lost Kobold who has to survive the caves filled with Adventurers since departed.",
      projectLink: "https://melissay94.github.io/gradies-grueling-grind/",
      gitHubLink: "https://github.com/melissay94/gradies-grueling-grind",
      technologies: ["HTML", "JavaScript", "PhaserJS"]
    },
    {
      title: "GameRally",
      summary: "A social interaction service specifically designed for people looking to create and plan tabletop events for a small group of people.",
      projectLink: "https://gamerallyio.herokuapp.com/",
      gitHubLink: "https://github.com/melissay94/GameRally",
      technologies: ["HTML", "BootStrap", "JavaScript", "EJS", "Express", "Sequelize", "Postgres"]
    }
  ]
  return(
    <div>
      {
        projects.map((project, index) => (
          <Card 
            className={classes.root}
            key={index}
            variant="outlined">
            <CardContent>
              <Typography 
                variant="h3"
                color="primary"
                gutterBottom>{project.title}
              </Typography>
              <Typography
                variant="h5">
                  {project.summary}
              </Typography>
              <ChipList chipList={project.technologies} />
            </CardContent>
            <CardActions>
              <Button size="small" href={project.projectLink} target="_blank">Live Demo</Button>
              <Button size="small" href={project.gitHubLink} target="_blank">GitHub Page</Button>
            </CardActions>
          </Card>
        ))
      }
    </div>
  );
}

export default Projects;
