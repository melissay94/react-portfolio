import React from "react";
import Chip from "@material-ui/core/Chip";
import TagFacesIcon from "@material-ui/icons/TagFaces";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
    padding: theme.spacing(0.5),
    marginTop: "1em"
  },
  chip: {
    margin: theme.spacing(0.5)
  }
}));

function ChipList(props) {
  const classes = useStyles();
  return(
    <div className={classes.root}>
      {
        props.chipList.map((skill, index) => {
          return (
            <Chip
              key={index}
              icon={<TagFacesIcon />}
              label={skill}
              className={classes.chip}/>
          );
        })
      }
    </div>
  )
}

export default ChipList;