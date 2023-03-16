import React, { useState, useEffect } from "react";
import { firestore } from "../../firebase";
import { collection, doc, getDoc, query, where } from "firebase/firestore";

import { useParams } from "react-router-dom";
import { Typography, Container, Box } from "@mui/material";
// import { makeStyles } from "@mui/styles";

// const useStyles = (theme) => ({
//   root: {
//     flexGrow: 1,
//     padding: theme.spacing(4),
//     [theme.breakpoints.down("sm")]: {
//       padding: theme.spacing(2),
//     },
//   },
//   image: {
//     width: "100%",
//     height: "auto",
//     marginBottom: theme.spacing(2),
//   },
//   content: {
//     marginTop: theme.spacing(4),
//     [theme.breakpoints.down("sm")]: {
//       marginTop: theme.spacing(2),
//     },
//   },
//   body: {
//     marginBottom: theme.spacing(4),
//     [theme.breakpoints.down("sm")]: {
//       marginBottom: theme.spacing(2),
//     },
//   },
// });

const SingleBlogPage = () => {
  const { postId } = useParams();
  const [blogPost, setBlogPost] = useState({});

  console.log(postId);

  useEffect(() => {
    const postRef = doc(firestore, "blogPosts", postId);

    // const postRef = firestore.collection("blogPosts").doc(postId);

    getDoc(postRef).then((doc) => {
      if (doc.exists) {
        setBlogPost(doc.data());
      } else {
        console.log("No such document!");
      }
    });
  }, [postId]);

  return (
    <Container
      maxWidth="md"
      // className={classes.root}
    >
      <Typography gutterBottom variant="h3" component="h1">
        {blogPost.title}
      </Typography>
      <Box
        component="img"
        // className={classes.image}
        src={blogPost.image}
        alt={blogPost.title}
      />
      <Typography
        variant="body1"
        // className={classes.body}
      >
        {blogPost.body}
      </Typography>
    </Container>
  );
};

export default SingleBlogPage;
