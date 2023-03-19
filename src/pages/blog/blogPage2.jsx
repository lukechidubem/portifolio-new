import React, { useState, useEffect } from "react";
import { firestore } from "../../firebase";
import { collection, orderBy, where } from "firebase/firestore";
import { query } from "firebase/firestore/lite";
import { useCollectionData } from "react-firebase-hooks/firestore";

import { Grid, Typography, useTheme, TextField } from "@mui/material";

import { GradientOverlay } from "../about";
import Loading from "../../components/loading";
import Pagination from "../../components/pagination";
import PostCard from "./postCard";

const BlogPage2 = () => {
  const [blogPosts, setBlogPosts] = useState([]);
  const blogPostsRef = collection(firestore, "blogPosts");

  const [titleQuery, setTitleQuery] = useState(
    query(blogPostsRef, orderBy("title", "desc"))
  );

  const [titleSearchInput, setTitleSearchInput] = useState("");

  const [titleBlogPostsData, titleLoading, titleError] = useCollectionData(
    titleQuery,
    {
      idField: "id",
      snapshotListenOptions: { includeMetadataChanges: true },
    }
  );

  const theme = useTheme();
  const dark = theme.palette.neutral.dark;
  const background = theme.palette.background.default;

  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    setBlogPosts(
      titleBlogPostsData?.filter((post) => {
        const searchRegex = new RegExp(titleSearchInput, "i");
        return searchRegex.test(post.title);
      }) || []
    );
  }, [titleBlogPostsData, titleSearchInput]);

  // Sort blogPosts by date created in descending order
  const sortedBlogPosts = [...blogPosts].sort((a, b) => {
    return new Date(b.createdAt) - new Date(a.createdAt);
  });

  const handleTitleSearch = (event) => {
    const searchTerm = event.target.value;
    setTitleSearchInput(searchTerm);
    setTitleQuery(
      query(
        blogPostsRef,
        where("title", ">=", searchTerm),
        where("title", "<=", searchTerm + 8),
        orderBy("title", "desc")
      )
    );
  };

  const postsPerPage = 6;
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = sortedBlogPosts.slice(indexOfFirstPost, indexOfLastPost);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div
      style={{
        backgroundColor: background,
        padding: "20px",
        // display: "flex",
        minHeight: "80vh",
      }}
    >
      <GradientOverlay />

      <TextField
        variant="outlined"
        label="Search by title"
        sx={{ mb: 2 }}
        margin="normal"
        onChange={handleTitleSearch}
      />

      <Grid container spacing={3}>
        {titleLoading ? (
          <Loading color={dark} />
        ) : titleError ? (
          <Typography gutterBottom color={dark} variant="h3" component="h2">
            Error fetching posts. Please try again later.
          </Typography>
        ) : currentPosts.length < 1 ? (
          <Typography
            gutterBottom
            variant="h3"
            component="h2"
            color={dark}
            margin="2rem"
          >
            No post title has related input provided, please try searching with
            another title
          </Typography>
        ) : (
          currentPosts
            .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
            .map((blogPost) => (
              <PostCard key={blogPost.postId} blogPost={blogPost} />
            ))
        )}
      </Grid>

      <Pagination
        postsPerPage={postsPerPage}
        totalPosts={sortedBlogPosts.length}
        paginate={paginate}
        currentPage={currentPage}
      />
    </div>
  );
};

export default BlogPage2;
