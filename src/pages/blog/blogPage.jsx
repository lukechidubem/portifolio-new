import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  Grid,
  Card,
  CardMedia,
  CardContent,
  Typography,
  TextField,
  Button,
  Container,
} from "@mui/material";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  },
  cardMedia: {
    height: 0,
    paddingTop: "56.25%", // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
  form: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    margin: theme.spacing(4),
  },
  textField: {
    marginBottom: theme.spacing(2),
  },
  button: {
    marginTop: theme.spacing(2),
  },
}));

const BlogPage = () => {
  const [blogPosts, setBlogPosts] = useState([]);
  const classes = useStyles();

  useEffect(() => {
    axios.get("https://api.example.com/posts").then((response) => {
      setBlogPosts(response.data);
    });
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    const title = event.target.elements.title.value;
    const image = event.target.elements.image.value;
    const bodyText = event.target.elements.bodyText.value;
    const newBlogPost = {
      title,
      image,
      bodyText,
    };
    setBlogPosts([...blogPosts, newBlogPost]);
    axios.post("https://api.example.com/posts", newBlogPost);
    event.target.reset();
  };

  return (
    <Container maxWidth="lg" className={classes.container}>
      <Grid container spacing={4}>
        {blogPosts.map((post) => (
          <Grid item xs={12} md={4} key={post.id}>
            <Card>
              <CardMedia
                className={classes.cardMedia}
                image={post.image}
                title={post.title}
              />
              <CardContent className={classes.cardContent}>
                <Typography gutterBottom variant="h5" component="h2">
                  {post.title}
                </Typography>
                <Typography>{post.bodyText}</Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
      <form onSubmit={handleSubmit} className={classes.form}>
        <Typography variant="h4" component="h2" gutterBottom>
          New Blog Post
        </Typography>
        <TextField
          id="title"
          label="Title"
          variant="outlined"
          fullWidth
          className={classes.textField}
        />
        <TextField
          id="image"
          label="Image URL"
          variant="outlined"
          fullWidth
          className={classes.textField}
        />
        <TextField
          id="bodyText"
          label="Body Text"
          multiline
          rows={6}
          variant="outlined"
          fullWidth
          className={classes.textField}
        />
        <Button
          variant="contained"
          color="primary"
          size="large"
          className={classes.button}
          type="submit"
        >
          Submit
        </Button>
      </form>
    </Container>
  );
};

export default BlogPage;
