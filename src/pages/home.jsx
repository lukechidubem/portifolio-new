import React from "react";
import {
  Box,
  Button,
  Container,
  Grid,
  Slide,
  Typography,
  useTheme,
  Zoom,
} from "@mui/material";
import "./home.css";
// import { useTheme } from "@mui/material/styles";
import profileImg from "../assets/104220384.jpeg";
import { GradientOverlay } from "./about";

import { Fade } from "@mui/material";

// ...

{
  /* <Fade in={true} timeout={1000}>
  <Typography
    variant="h3"
    component="h1"
    sx={{ mb: 2, fontSize: "2.5rem" }}
    color="#0099ff"
  >
    Hi, I'm Ezeji Luke
  </Typography>
</Fade> */
}

const HomePage = () => {
  const theme = useTheme();
  const neutralLight = theme.palette.neutral.light;
  const dark = theme.palette.neutral.dark;
  const background = theme.palette.background.default;
  const primaryLight = theme.palette.primary.light;
  const alt = theme.palette.background.alt;
  return (
    <div style={{ backgroundColor: background }}>
      <GradientOverlay />

      <Container
        className="home-about"
        sx={{
          bgcolor: neutralLight,
          p: 2,
          color: dark,
          paddingTop: "2rem",

          // maxWidth: "none",
          height: "90vh",
        }}
      >
        <Grid container spacing={6} marginTop="3rem" marginBottom="3rem">
          <Grid item xs={12} sm={6}>
            <Box sx={{ px: 1, color: dark, fontFamily: "Arial" }}>
              <Fade in={true} timeout={2000}>
                <Typography
                  variant="h3"
                  component="h1"
                  sx={{ mb: 2, fontSize: "2.5rem" }}
                  color="#0099ff"
                >
                  Hi, I'm Ezeji Luke
                </Typography>
              </Fade>

              <Typography
                variant="body1"
                sx={{ mb: 2, fontSize: "1.5rem", textAlign: "" }}
              >
                I'm a Full-stack Web Developer with years of experience in
                building websites and web applications.
              </Typography>
              <Typography
                variant="body1"
                sx={{ mb: 2, fontSize: "1.5rem", textAlign: "" }}
              >
                I specialized in JavaScript, HTML, CSS, NodeJS, ExpressJS,
                ReactJS, NextJS, TypeScript and more. I have worked with clients
                ranging from small startups to large corporations and enjoys
                collaborating teams to build amazing things.
              </Typography>
              <Slide direction="up" in={true} timeout={2000}>
                <Button
                  variant="contained"
                  sx={{
                    mt: 5,
                    backgroundColor: "#0099ff",
                  }}
                >
                  <a
                    style={{ textDecoration: "none" }}
                    href="https://docs.google.com/document/d/1clavshRxP8PBiUHbz2JYnDFcSdpgYMzpv7BbJA-LIRc/edit"
                    download
                  >
                    Download My Resume
                  </a>
                </Button>
              </Slide>
            </Box>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Zoom in={true} timeout={1000}>
              <img
                style={{
                  width: 300,
                  height: 300,
                  mx: "auto",
                  mb: 4,
                  boxShadow: "0 0 20px rgba(0, 0, 0, 0.2)",
                  border: "5px solid white",
                  "& img": { objectFit: "cover" },
                }}
                // src="https://via.placeholder.com/400x400"
                src={profileImg}
                alt="Luke Dubem"
                className="profile-img"
              />
            </Zoom>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default HomePage;
