import React, { useState, useEffect } from "react";
import { firestore } from "../../firebase";
import { collection, query, where } from "firebase/firestore";

import { useCollectionData } from "react-firebase-hooks/firestore";

import {
  Grid,
  Card,
  CardMedia,
  CardContent,
  Typography,
  Button,
  useTheme,
  TextField,
} from "@mui/material";

import { Link } from "react-router-dom";
import { GradientOverlay } from "../about";

const BlogPage2 = () => {
  const [blogPosts, setBlogPosts] = useState([]);
  const blogPostsRef = collection(firestore, "blogPosts");
  const [searchQuery, setSearchQuery] = useState(
    query(blogPostsRef, where("title", ">=", ""))
  );

  const [blogPostsData, loading, error] = useCollectionData(searchQuery, {
    idField: "id",
    snapshotListenOptions: { includeMetadataChanges: true },
  });

  const theme = useTheme();
  const neutralLight = theme.palette.neutral.light;
  const dark = theme.palette.neutral.dark;
  const background = theme.palette.background.default;
  const primaryLight = theme.palette.primary.light;
  const alt = theme.palette.background.alt;

  useEffect(() => {
    setBlogPosts(blogPostsData || []);
  }, [blogPostsData]);

  const handleSearch = (event) => {
    event.preventDefault();
    const searchTerm = event.target.value;
    setSearchQuery(
      query(
        blogPostsRef,
        where("title", ">=", searchTerm),
        where("title", "<=", searchTerm + "\uf8ff")
      )
    );
  };

  if (loading)
    return (
      <div
        style={{
          height: "80vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: background,
          color: dark,
        }}
      >
        <div>Loading...</div>
      </div>
    );
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div
      // className={classes.root}
      style={{ backgroundColor: background, padding: "20px" }}
    >
      <GradientOverlay />
      <TextField
        label="Search Blog Posts"
        variant="outlined"
        onChange={handleSearch}
        // fullWidth
        margin="normal"
      />

      <Grid container spacing={3}>
        {blogPosts.map((blogPost) => (
          <Grid item key={blogPost.postId} xs={12} sm={6} md={4}>
            <Card
              sx={{ height: "100%", display: "flex", flexDirection: "column" }}
            >
              <Link to={`/blog/${blogPost.postId}`}>
                <CardMedia
                  // className={classes.cardMedia}
                  sx={{ flexGrow: 1, paddingTop: "56.25%" }}
                  image={blogPost.image}
                  title={blogPost.title}
                />
              </Link>
              <CardContent sx={{ flexGrow: 1 }}>
                <Typography gutterBottom variant="h3" component="h2">
                  {blogPost.title}
                </Typography>
                {/* <Typography>{post.body}</Typography> */}
                <Typography variant="h5">
                  {blogPost.body.substring(0, 100)}...{" "}
                  <Link
                    to={`/blog/${blogPost.postId}`}
                    // className={classes.readMoreButton}
                    style={{
                      marginTop: "auto",
                      marginLeft: "auto",
                      color: "#0099ff",
                    }}
                  >
                    Read More
                  </Link>
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default BlogPage2;
