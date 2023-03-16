import React, { useState, useEffect } from "react";
import { firestore } from "../../firebase";
import {
  collection,
  addDoc,
  query,
  where,
  setDoc,
  doc,
} from "firebase/firestore";

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
// import { makeStyles } from "@mui/styles";

// const useStyles = (theme) => ({
//   container: {
//     paddingTop: '20px',
//     paddingBottom: theme.spacing(4),
//   },
//   cardMedia: {
//     height: 0,
//     paddingTop: "56.25%", // 16:9
//   },
//   cardContent: {
//     flexGrow: 1,
//   },
//   form: {
//     display: "flex",
//     flexDirection: "column",
//     alignItems: "center",
//     margin: theme.spacing(4),
//   },
//   textField: {
//     marginBottom: theme.spacing(2),
//   },
//   button: {
//     marginTop: theme.spacing(2),
//   },
// });

const BlogPage = () => {
  const [blogPosts, setBlogPosts] = useState([]);
  // const classes = useStyles();
  const [title, setTitle] = useState("");
  const [image, setImage] = useState("");
  const [body, setBody] = useState("");

  // const handleSubmit = (event) => {
  //   event.preventDefault();
  //   collection(firestore, "blogPosts").add({
  //     title,
  //     image,
  //     body,
  //   });
  //   setTitle("");
  //   setImage("");
  //   setBody("");
  // };

  const handleSubmit = async (event) => {
    event.preventDefault();

    console.log("working");

    const postRef = collection(firestore, "blogPosts");

    const newPostRef = doc(postRef);
    const postId = newPostRef.id;

    const newPost = {
      title,
      image,
      body,
      postId,
    };

    console.log("working");
    try {
      const docRef = await setDoc(newPostRef, newPost);

      // console.log("Document written with ID: ", docRef.id);

      setTitle("");
      setImage("");
      setBody("");
    } catch (error) {
      console.error("Error adding document: ", error);
    }
    console.log("working");
  };

  return (
    <Container
      maxWidth="lg"
      // className={classes.container}
      sx={{
        paddingTop: "30px",
        paddingBottom: "30px",
      }}
    >
      <Grid container spacing={4}>
        {blogPosts.map((post) => (
          <Grid item xs={12} md={4} key={post.id}>
            <Card>
              <CardMedia
                // className={classes.cardMedia}
                sx={{
                  height: 0,
                  paddingTop: "56.25%", // 16:9
                }}
                image={post.image}
                title={post.title}
              />
              <CardContent
                // className={classes.cardContent}
                sx={{
                  flexGrow: 1,
                }}
              >
                <Typography gutterBottom variant="h5" component="h2">
                  {post.title}
                </Typography>
                <Typography>{post.bodyText}</Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
      <form
        onSubmit={handleSubmit}
        // className={classes.form}
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          margin: "30px",
        }}
      >
        <Typography variant="h4" component="h2" gutterBottom>
          New Blog Post
        </Typography>
        <TextField
          id="title"
          label="Title"
          variant="outlined"
          fullWidth
          sx={{
            marginBottom: "20px",
          }}
          // className={classes.textField}
          value={title}
          onChange={(event) => setTitle(event.target.value)}
        />
        <TextField
          id="image"
          label="Image URL"
          variant="outlined"
          fullWidth
          // className={classes.textField}
          sx={{
            marginBottom: "20px",
          }}
          value={image}
          onChange={(event) => setImage(event.target.value)}
        />
        <TextField
          id="body"
          label="Body Text"
          multiline
          rows={6}
          variant="outlined"
          fullWidth
          // className={classes.textField}
          sx={{
            marginBottom: "20px",
          }}
          value={body}
          onChange={(event) => setBody(event.target.value)}
        />
        <Button
          variant="contained"
          color="primary"
          size="large"
          sx={{
            marginBottom: "20px",
          }}
          // className={classes.button}
          type="submit"
        >
          Submit
        </Button>
      </form>
    </Container>
  );
};

export default BlogPage;
