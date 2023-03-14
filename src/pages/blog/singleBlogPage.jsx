import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { Typography, Container, Box } from "@mui/material";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    padding: theme.spacing(4),
    [theme.breakpoints.down("sm")]: {
      padding: theme.spacing(2),
    },
  },
  image: {
    width: "100%",
    height: "auto",
    marginBottom: theme.spacing(2),
  },
  content: {
    marginTop: theme.spacing(4),
    [theme.breakpoints.down("sm")]: {
      marginTop: theme.spacing(2),
    },
  },
  body: {
    marginBottom: theme.spacing(4),
    [theme.breakpoints.down("sm")]: {
      marginBottom: theme.spacing(2),
    },
  },
}));
const SingleBlogPage = () => {
  const classes = useStyles();
  const { id: postId } = useParams();
  const [blogPost, setBlogPost] = useState({});

  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/posts/${postId}`)
      .then((response) => {
        setBlogPost(response.data);
      });
  }, [postId]);

  return (
    <Container maxWidth="md" className={classes.root}>
      <Typography gutterBottom variant="h3" component="h1">
        {blogPost.title}
      </Typography>
      <Box
        component="img"
        className={classes.image}
        src={`https://picsum.photos/id/${blogPost.id}/800`}
        alt={blogPost.title}
      />
      <Typography variant="body1" className={classes.body}>
        {blogPost.body}
      </Typography>
    </Container>
  );
};

export default SingleBlogPage;
