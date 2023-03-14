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
} from "@mui/material";

const BlogPage = () => {
  const [blogPosts, setBlogPosts] = useState([]);

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
    <>
      <Grid container spacing={2}>
        {blogPosts.map((post) => (
          <Grid item xs={12} md={4} key={post.id}>
            <Card>
              <CardMedia
                component="img"
                height="140"
                image={post.image}
                alt={post.title}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {post.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {post.bodyText}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
      <form onSubmit={handleSubmit}>
        <TextField
          id="title"
          label="Title"
          variant="outlined"
          fullWidth
          margin="normal"
        />
        <TextField
          id="image"
          label="Image URL"
          variant="outlined"
          fullWidth
          margin="normal"
        />
        <TextField
          id="bodyText"
          label="Body Text"
          variant="outlined"
          multiline
          rows={6}
          fullWidth
          margin="normal"
        />
        <Button variant="contained" color="primary" type="submit">
          Submit
        </Button>
      </form>
    </>
  );
};

//////////////////////////////////////////
// ======================blog form ======================

import React, { useState } from "react";
import {
  TextField,
  Button,
  Box,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import axios from "axios";

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

const BlogForm = () => {
  const classes = useStyles();
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [image, setImage] = useState("");
  const [category, setCategory] = useState("");

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleContentChange = (event) => {
    setContent(event.target.value);
  };

  const handleImageChange = (event) => {
    setImage(event.target.files[0]);
  };

  const handleCategoryChange = (event) => {
    setCategory(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append("title", title);
    formData.append("content", content);
    formData.append("category", category);
    formData.append("image", image);

    axios
      .post("http://localhost:8000/api/posts/", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((response) => {
        console.log(response);
        setTitle("");
        setContent("");
        setImage("");
        setCategory("");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <Box component="form" onSubmit={handleSubmit}>
      <TextField
        id="title"
        label="Title"
        variant="outlined"
        fullWidth
        margin="normal"
        value={title}
        onChange={handleTitleChange}
      />
      <TextField
        id="content"
        label="Content"
        variant="outlined"
        fullWidth
        margin="normal"
        multiline
        rows={10}
        value={content}
        onChange={handleContentChange}
      />
      <FormControl className={classes.formControl} fullWidth>
        <InputLabel id="category-label">Category</InputLabel>
        <Select
          labelId="category-label"
          id="category"
          value={category}
          onChange={handleCategoryChange}
        >
          <MenuItem value="technology">Technology</MenuItem>
          <MenuItem value="politics">Politics</MenuItem>
          <MenuItem value="health">Health</MenuItem>
          <MenuItem value="travel">Travel</MenuItem>
        </Select>
      </FormControl>
      <input type="file" onChange={handleImageChange} />
      <Button type="submit" variant="contained" color="primary">
        Submit
      </Button>
    </Box>
  );
};

export default BlogForm;
