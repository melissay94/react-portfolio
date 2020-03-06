import React from "react";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  root: {
    margin: "2em 1em",
    padding: "1em",
    textAlign: "center"
  },
  title: {
    margin: "0.5em 0"
  },
  date: {
    textAlign: "right"
  }
});

function Blog(props) {
  const classes = useStyles();
  return(
    <div>
      {
        props.posts.map((post, index) => (
          <Paper
            className={classes.root}
            variant="outlined"
            key={index}>
              <Typography
                className={classes.title}
                variant="h3"
                color="primary">
                  {post.title}
              </Typography>
              <img src={post.image} alt={post.title}/>
              <Typography>
                {post.body}
              </Typography>
              <Typography
                className={classes.date}
                variant="subtitle2">
                  {post.date}
                </Typography>
          </Paper>
        ))
      }
    </div>
  );
}

export default Blog;
