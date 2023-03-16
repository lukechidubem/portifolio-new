import React, { useState } from "react";
import { firestore } from "../../firebase";
import { collection, setDoc, doc } from "firebase/firestore";

import {
  Typography,
  TextField,
  Button,
  Container,
  useTheme,
} from "@mui/material";
import { GradientOverlay } from "../about";

const BlogPage = () => {
  const [title, setTitle] = useState("");
  const [image, setImage] = useState("");
  const [body, setBody] = useState("");

  const theme = useTheme();
  const dark = theme.palette.neutral.dark;
  const background = theme.palette.background.default;
  const alt = theme.palette.background.alt;

  const handleSubmit = async (event) => {
    event.preventDefault();

    console.log("working");

    const postRef = collection(firestore, "blogPosts");

    const newPostRef = doc(postRef);
    const postId = newPostRef.id;

    const newPost = {
      title,
      image,
      body: body,
      postId,
    };

    console.log("working");
    try {
      const docRef = await setDoc(newPostRef, newPost);

      setTitle("");
      setImage("");
      setBody("");
    } catch (error) {
      console.error("Error adding document: ", error);
    }
    console.log("upload successful");
  };

  return (
    <div
      // className={classes.root}
      style={{
        backgroundColor: background,
        color: dark,
        padding: "20px",
        flexGrow: 1,
      }}
    >
      <GradientOverlay />
      <Container
        maxWidth="lg"
        // className={classes.container}
        sx={{
          paddingTop: "30px",
          paddingBottom: "30px",
        }}
      >
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
    </div>
  );
};

export default BlogPage;
