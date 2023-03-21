import React, { useState, useEffect } from "react";
import { firestore } from "../../firebase";
import { collection, doc, getDoc, query, where } from "firebase/firestore";
// import ModalImage from "react-modal-image";
import { useParams } from "react-router-dom";
import { Typography, Container, Box, useTheme, Zoom } from "@mui/material";
import { GradientOverlay } from "../about";

import "../home.css";

const SingleBlogPage = () => {
  const { postId } = useParams();
  const [blogPost, setBlogPost] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  // const [isZoomed, setIsZoomed] = useState(false);

  const theme = useTheme();
  const neutralLight = theme.palette.neutral.light;
  const dark = theme.palette.neutral.dark;
  const background = theme.palette.background.default;
  const primaryLight = theme.palette.primary.light;
  const alt = theme.palette.background.alt;

  useEffect(() => {
    const postRef = doc(firestore, "blogPosts", postId);

    getDoc(postRef).then((doc) => {
      if (doc.exists) {
        setBlogPost(doc.data());

        setIsLoading(false);
      } else {
        console.log("No such document!");
        setIsLoading(false);
      }
    });
  }, [postId]);

  if (isLoading)
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

  return (
    <div
      // className={classes.root}
      style={{ backgroundColor: background, padding: "20px", flexGrow: 1 }}
    >
      <GradientOverlay />
      <Container
        maxWidth="md"
        // className={classes.root}
        sx={{
          flexGrow: 1,
          padding: "20px",
          backgroundColor: background,
          color: dark,

          // padding: "15px",
        }}
      >
        <Typography
          gutterBottom
          variant="h2"
          component="h1"
          color="#0099ff"
          sx={{ marginBottom: "30px" }}
        >
          {blogPost.title}
        </Typography>
        {blogPost.image?.split(",")?.map((img, i) => {
          return (
            // <ModalImage
            //   component="img"
            //   sx={{
            //     width: "100%",
            //     height: "auto",
            //     marginBottom: "20px",
            //   }}
            //   show={isZoomed}
            //   imageBackgroundColor="#fff"
            //   className="custom-modal"
            //   small={img}
            //   large={img}
            //   // src={img}
            //   alt={blogPost.title}
            //   onClick={() => setIsZoomed(true)}
            // />
            <Zoom in={true} timeout={1000}>
              <Box
                key={i}
                component="img"
                // className={classes.image}
                sx={{
                  width: "100%",
                  height: "auto",
                  marginBottom: "20px",
                  borderRadius: "16px",
                }}
                src={img}
                alt={blogPost.title}
              />
            </Zoom>
          );
        })}

        {blogPost?.body?.split("\\n").map((str, i) => {
          return (
            <Typography
              key={i}
              variant="h4"
              component="h3"
              sx={{
                marginBottom: "20px",
                lineHeight: "35px",
                wordSpacing: "3px",
              }}
            >
              {str}
            </Typography>
          );
        })}
        {/* </Typography> */}
      </Container>
    </div>
  );
};

export default SingleBlogPage;
