import React, { useState } from "react";
import Typography from "@material-ui/core/Typography";
import ChipList from "./ChipList";

function Home(props) {
  const [skillsData, setSkillsData] = useState([
    "React", 
    "Material UI",
    "Express",
    "Sequelize",
    "JavaScript",
    "HTML & CSS",
    "BootStrap",
    "EJS"
  ]);

  return(
    <div>
      <Typography 
        variant="h1"
        color="inherit"
        align="center">
        Melissa Young
      </Typography>
      <Typography
        variant="h3"
        color="primary"
        align="center">
          A Software Engineer.
      </Typography>
      <Typography
        variant="body1"
        color="inherit"
        align="center">
          Current focusing on completing an intensive 12 week, 480+ hour boot camp at <a href="https://generalassemb.ly/">General Assembly</a> in Seattle.
          Aiming to start at a full time position after April working on as a Front End developer.
      </Typography>
      <ChipList chipList={skillsData} />
    </div>
  );
}

export default Home;
