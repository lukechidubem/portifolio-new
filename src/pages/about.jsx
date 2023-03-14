import React from "react";
import {
  Box,
  Typography,
  Grid,
  Divider,
  Avatar,
  Button,
  useTheme,
} from "@mui/material";
import profileImg from "../assets/104220384.jpeg";

import { alpha, styled } from "@mui/system";

export const GradientOverlay = styled("div")(({ theme }) => ({
  position: "absolute",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  background: `linear-gradient(180deg, rgba(0,0,0,0.6) 0%, rgba(0,0,0,0.4) 50%, rgba(0,0,0,0) 100%)`,
  zIndex: -20,
}));

function AboutPage() {
  const theme = useTheme();
  const neutralLight = theme.palette.neutral.light;
  const dark = theme.palette.neutral.dark;
  const background = theme.palette.background.default;
  const primaryLight = theme.palette.primary.light;
  const alt = theme.palette.background.alt;

  return (
    <Box
      sx={{
        py: 8,
        backgroundColor: background,
        color: dark,
        // backgroundImage: "url(https://source.unsplash.com/random/1600x900)",
        // backgroundSize: "cover",
        // backgroundPosition: "center",
      }}
    >
      <GradientOverlay />
      <Typography
        variant="h3"
        component="h1"
        align="center"
        sx={{
          mb: 2,
          fontSize: "3rem",
          fontWeight: "bold",
        }}
      >
        About Me
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={12} md={5}>
          <Avatar
            sx={{
              width: 300,
              height: 300,
              mx: "auto",
              mb: 4,
              boxShadow: "0 0 20px rgba(0, 0, 0, 0.2)",
              border: "5px solid white",
              "& img": { objectFit: "cover" },
            }}
            src={profileImg}
            alt="Dubem Luke"
          />
        </Grid>
        <Grid item xs={12} md={7}>
          <Typography
            variant="h3"
            component="h1"
            sx={{ mb: 2, fontSize: "2.5rem", ml: 2 }}
          >
            {" "}
            Hi, I'm Dubem Luke
          </Typography>
          <Typography variant="body1" sx={{ mb: 2, fontSize: "1.5rem", ml: 2 }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
            vulputate, lorem vel malesuada dapibus, nulla lorem faucibus massa,
            vel euismod nisi quam vitae nisl. Duis suscipit lacinia nibh, eu
            eleifend elit placerat sed.
          </Typography>
          <Typography variant="body1" sx={{ mb: 2, fontSize: "1.5rem", ml: 2 }}>
            In my free time, I enjoy hiking, photography, and spending time with
            my family and friends.
          </Typography>
          <Button
            variant="contained"
            sx={{
              mt: 2,
              mr: 2,
              py: 2,
              px: 4,
              ml: 2,
              backgroundColor: "#0099ff",
              color: "#333",
            }}
          >
            Download My Resume
          </Button>
        </Grid>
      </Grid>
      <Divider sx={{ my: 8 }} />
      <Typography
        variant="h4"
        component="h2"
        align="center"
        sx={{
          mb: 4,
          fontWeight: "bold",
          color: dark,
          textShadow: "1px 1px 2px rgba(0, 0, 0, 0.1)",
          letterSpacing: "1px",
          textTransform: "uppercase",
          borderBottom: "2px solid #777",
          paddingBottom: "8px",
        }}
      >
        My Skills
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={12} md={4}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              p: 3,
              boxShadow: "0 0 20px rgba(0, 0, 0, 0.2)",
              borderRadius: "10px",
              minHeight: "240px",
              "& h6": {
                mb: 2,
                fontWeight: "bold",
                textShadow: "0px 2px 4px rgba(0,0,0,0.25)",
              },
              "& p": {
                textAlign: "center",

                lineHeight: "3",
                margin: "20px 0 0 0",
              },
              // "&:hover": {
              //   backgroundColor: "#0099ff",
              //   cursor: "pointer",
              // },
            }}
          >
            <Typography
              variant="h3"
              color="#0099ff"
              component="h3"
              align="center"
            >
              Web Development
            </Typography>
            <Typography
              variant="body1"
              align="center"
              sx={{
                fontSize: "1.2rem",
                fontWeight: "bold",

                textTransform: "uppercase",
                marginTop: "2rem",
              }}
            >
              HTML, CSS, JavaScript, React, Node.js, Express, TypeScript
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={12} md={4}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              p: 3,
              boxShadow: "0 0 20px rgba(0, 0, 0, 0.2)",
              borderRadius: "10px",
              minHeight: "240px",
              "& h6": {
                mb: 2,
                fontWeight: "bold",
                textShadow: "0px 2px 4px rgba(0,0,0,0.25)",
              },
              "& p": {
                textAlign: "center",
                lineHeight: "3",
                margin: "20px 0 0 0",
              },
            }}
          >
            <Typography
              variant="h3"
              color="#0099ff"
              component="h3"
              align="center"
            >
              Design
            </Typography>
            <Typography
              variant="body1"
              align="center"
              sx={{
                fontSize: "1.2rem",
                fontWeight: "bold",
                textTransform: "uppercase",
                marginTop: "2rem",
              }}
            >
              Sketch, Figma, Adobe Creative Suite
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={12} md={4}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              p: 3,
              boxShadow: "0 0 20px rgba(0, 0, 0, 0.2)",
              borderRadius: "10px",
              minHeight: "240px",
              "& h6": {
                mb: 2,
                fontWeight: "bold",
                textShadow: "0px 2px 4px rgba(0,0,0,0.25)",
              },
              "& p": {
                textAlign: "center",

                lineHeight: "3",
                margin: "20px 0 0 0",
              },
              // "&:hover": {
              //   backgroundColor: "#0099ff",
              //   cursor: "pointer",
              // },
            }}
          >
            <Typography
              variant="h3"
              color="#0099ff"
              component="h3"
              align="center"
            >
              Other Skills
            </Typography>
            <Typography
              variant="body1"
              align="center"
              sx={{
                fontSize: "1.2rem",
                fontWeight: "bold",

                textTransform: "uppercase",
                marginTop: "2rem",
              }}
            >
              {" "}
              Project Management, Agile Methodologies, Communication
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}

export default AboutPage;
