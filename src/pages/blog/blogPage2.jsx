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
// import { makeStyles } from "@mui/styles";

import { Link } from "react-router-dom";
import { GradientOverlay } from "../about";

// const useStyles = (theme) => ({
//   root: {
//     flexGrow: 1,
//     padding: theme.spacing(4),
//   },
//   card: {
//     height: "100%",
//     display: "flex",
//     flexDirection: "column",
//   },
//   cardMedia: {
//     paddingTop: "56.25%",
//   },
//   cardContent: {
//     flexGrow: 1,
//   },
//   readMoreButton: {
//     marginTop: "auto",
//     marginLeft: "auto",
//     color: "#0099ff",
//   },
// });

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

  console.log(blogPostsData);

  const theme = useTheme();
  const neutralLight = theme.palette.neutral.light;
  const dark = theme.palette.neutral.dark;
  const background = theme.palette.background.default;
  const primaryLight = theme.palette.primary.light;
  const alt = theme.palette.background.alt;

  useEffect(() => {
    setBlogPosts(blogPostsData || []);
  }, [blogPostsData]);

  // useEffect(() => {
  //   axios.get("https://jsonplaceholder.typicode.com/posts").then((response) => {
  //     setBlogPosts(response.data);
  //   });
  // }, []);

  console.log(blogPosts);

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

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div
      // className={classes.root}
      sx={{ backgroundColor: background }}
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

// Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint aliquid totam dolorem aliquam ea rem corporis est earum soluta aut natus exercitationem illum, dolore ut recusandae. Rem consectetur voluptate earum harum quasi molestiae ad nihil impedit nemo quia, delectus sint illo tempora facere obcaecati, hic cumque, nulla ducimus quo itaque? Aliquid ipsa magni molestiae unde quidem odit sapiente! Ducimus neque libero quasi consequuntur rerum repellat beatae, officia suscipit. Est reiciendis voluptatem, nisi maiores porro aut aliquid delectus culpa autem unde ut temporibus in adipisci eligendi, expedita veritatis cum architecto?

// {/* <Grid container spacing={4} sx={{ backgroundColor: background }}>
// {blogPosts.map((post) => (
//   <Grid item key={post.id} xs={12} sm={6} md={4}>
//     <Card className={classes.card}>
//       <CardMedia
//         className={classes.cardMedia}
//         image={post.image}
//         title={post.title}
//       />
//       <CardContent className={classes.cardContent}>
//         <Typography gutterBottom variant="h3" component="h2">
//           {post.title}
//         </Typography>
//         {/* <Typography>{post.body}</Typography> */}
//         <Typography variant="h5">
//           {post.body.substring(0, 100)}...{" "}
//           <Link
//             to={`/blog/${post.id}`}
//             className={classes.readMoreButton}
//           >
//             Read More
//           </Link>
//         </Typography>
//       </CardContent>
//       <Button
//         className={classes.readMoreButton}
//         component={Link}
//         to={`/blog/${post.id}`}
//         variant="contained"
//         // color="primary"
//         sx={{ backgroundColor: "#0099ff" }}
//       >
//         Read More
//       </Button>
//     </Card>
//   </Grid>
// ))}
// </Grid> */}
