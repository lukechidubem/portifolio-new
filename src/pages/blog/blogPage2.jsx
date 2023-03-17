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
  const dark = theme.palette.neutral.dark;
  const background = theme.palette.background.default;

  const [currentPage, setCurrentPage] = useState(1);

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

  console.log(blogPosts);

  const postsPerPage = 3;
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = blogPosts.slice(indexOfFirstPost, indexOfLastPost);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

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
        {/* {blogPosts.map((blogPost) => ( */}
        {currentPosts.map((blogPost) => (
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

      <Pagination
        postsPerPage={postsPerPage}
        totalPosts={blogPosts.length}
        paginate={paginate}
        currentPage={currentPage}
      />
    </div>
  );
};

export default BlogPage2;

// Pagination Component

const Pagination = ({ postsPerPage, totalPosts, currentPage, paginate }) => {
  const pageNumbers = [];
  const [currentBlock, setCurrentBlock] = useState(1);

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }

  const firstPage = (currentBlock - 1) * 3 + 1;
  const lastPage = Math.min(currentBlock * 3, pageNumbers.length);

  const handleClick = (number) => {
    paginate(number);
    setCurrentBlock(Math.ceil(number / 3));
  };

  return (
    <nav>
      <ul
        style={{
          display: "flex",
          justifyContent: "center",
          marginTop: "30px",
          listStyle: "none",
        }}
      >
        {firstPage > 1 && (
          <li>
            <Button
              variant="outlined"
              color="secondary"
              onClick={() => handleClick(firstPage - 3)}
              style={{ margin: "0 5px" }}
            >
              &laquo;
            </Button>
          </li>
        )}
        {pageNumbers.slice(firstPage - 1, lastPage).map((number) => (
          <li key={number}>
            <Button
              variant={currentPage === number ? "contained" : "outlined"}
              // color="secondary"
              onClick={() => handleClick(number)}
              style={{ margin: "0 5px", color: "#0099ff" }}
            >
              {number}
            </Button>
          </li>
        ))}
        {lastPage < pageNumbers.length && (
          <li>
            <Button
              variant="outlined"
              // color="#0099ff"
              onClick={() => handleClick(lastPage + 1)}
              style={{ margin: "0 5px", color: "#0099ff" }}
            >
              &raquo;
            </Button>
          </li>
        )}
      </ul>
    </nav>
  );
};
