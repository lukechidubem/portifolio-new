import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  Grid,
  Card,
  CardMedia,
  CardContent,
  Typography,
  Button,
  useTheme,
} from "@mui/material";
import { makeStyles } from "@mui/styles";

import { Link } from "react-router-dom";
import { GradientOverlay } from "../about";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    padding: theme.spacing(4),
  },
  card: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
  },
  cardMedia: {
    paddingTop: "56.25%",
  },
  cardContent: {
    flexGrow: 1,
  },
  readMoreButton: {
    marginTop: "auto",
    marginLeft: "auto",
  },
}));

const BlogPage2 = () => {
  const classes = useStyles();
  const [blogPosts, setBlogPosts] = useState([]);

  const theme = useTheme();
  const neutralLight = theme.palette.neutral.light;
  const dark = theme.palette.neutral.dark;
  const background = theme.palette.background.default;
  const primaryLight = theme.palette.primary.light;
  const alt = theme.palette.background.alt;

  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/posts").then((response) => {
      setBlogPosts(response.data);
    });
  }, []);

  return (
    <div className={classes.root} sx={{ backgroundColor: background }}>
      <GradientOverlay />

      <Grid container spacing={4} sx={{ backgroundColor: background }}>
        {blogPosts.map((post) => (
          <Grid item key={post.id} xs={12} sm={6} md={4}>
            <Card className={classes.card}>
              <CardMedia
                className={classes.cardMedia}
                image={`https://picsum.photos/id/${post.id}/300`}
                title={post.title}
              />
              <CardContent className={classes.cardContent}>
                <Typography gutterBottom variant="h5" component="h2">
                  {post.title}
                </Typography>
                {/* <Typography>{post.body}</Typography> */}
                <Typography>
                  {post.body.substring(0, 100)}...{" "}
                  <Link to={`/blog/${post.id}`} className={classes.readMore}>
                    Read More
                  </Link>
                </Typography>
              </CardContent>
              <Button
                className={classes.readMoreButton}
                component={Link}
                to={`/blog/${post.id}`}
                variant="contained"
                color="primary"
              >
                Read More
              </Button>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default BlogPage2;
