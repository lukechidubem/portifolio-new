import React from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import TwitterIcon from "@mui/icons-material/Twitter";
import { useTheme } from "@mui/material";

const Footer = () => {
  const theme = useTheme();
  const neutralLight = theme.palette.neutral.light;
  const dark = theme.palette.neutral.dark;
  const background = theme.palette.background.default;
  const primaryLight = theme.palette.primary.light;
  const alt = theme.palette.background.alt;

  return (
    <div
      //   className={classes.root}
      style={{
        backgroundColor: alt,
        color: dark,
        padding: "20px 0",
      }}
    >
      <Container
        maxWidth="lg"
        // className={classes.container}
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "wrap",
        }}
      >
        <Typography
          //   className={classes.text}
          sx={{
            display: "flex",
            alignItems: "center",
            fontSize: "1rem",
          }}
        >
          &copy; {new Date().getFullYear()} Dubem Luke. All rights reserved.
        </Typography>
        <div>
          <IconButton
            sx={{
              color: dark,
              marginRight: "1rem",
              fontSize: "1.5rem",
            }}
            // className={classes.icon}
            aria-label="LinkedIn"
            href="https://www.linkedin.com/ezeji-chidubem-luke"
            target="_blank"
            rel="noopener noreferrer"
          >
            <LinkedInIcon />
          </IconButton>
          <IconButton
            sx={{
              color: dark,
              marginRight: "1rem",
              fontSize: "1.5rem",
            }}
            aria-label="GitHub"
            href="https://github.com/lukechidubem"
            target="_blank"
            rel="noopener noreferrer"
          >
            <GitHubIcon />
          </IconButton>

          <IconButton
            sx={{
              color: dark,
              marginRight: "1rem",
              fontSize: "1.5rem",
            }}
            // className={classes.icon}
            aria-label="GitHub"
            href="https://twitter.com/lukechidubem"
            target="_blank"
            rel="noopener noreferrer"
          >
            <TwitterIcon />
          </IconButton>
        </div>
      </Container>
    </div>
  );
};

export default Footer;
