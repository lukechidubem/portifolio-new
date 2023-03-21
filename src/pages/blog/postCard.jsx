import React from "react";
import { Card, CardContent, CardMedia, Grid, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import FormatDate from "../../components/formatDate";

const PostCard = ({ blogPost }) => {
  return (
    <Grid item xs={12} sm={6} md={4}>
      <Card
        sx={{
          height: "100%",
          display: "flex",
          flexDirection: "column",
          borderRadius: "16px",
          margin: "10px",
        }}
      >
        <Link to={`/blog/${blogPost.postId}`}>
          <CardMedia
            // className={classes.cardMedia}
            sx={{ flexGrow: 1, paddingTop: "56.25%" }}
            image={blogPost.image?.split(",")[0]}
            title={blogPost.title}
          />
        </Link>
        <CardContent sx={{ flexGrow: 1 }}>
          <Typography gutterBottom variant="h3" component="h2" color="#0099ff">
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
          <FormatDate date={blogPost.createdAt} />
        </CardContent>
      </Card>
    </Grid>
  );
};

export default PostCard;
