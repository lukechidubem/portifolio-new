import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";
import { IconButton } from "@mui/material";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import TwitterIcon from "@mui/icons-material/Twitter";

const Footer2 = () => {
  // const classes = useStyles();
  return (
    <div
    // className={classes.root}
    >
      {/* <Container maxWidth="md"> */}
      <Grid container spacing={4} justifyContent="space-between">
        <Container
          maxWidth="lg"
          // className={classes.container}
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
          }}
        >
          <Typography
            // className={classes.text}
            sx={{
              display: "flex",
              alignItems: "center",
              fontSize: "1rem",
              // [theme.breakpoints.up("sm")]: {
              //   fontSize: "1.25rem",
              // },
            }}
          >
            © 2023 Jane Doe. All rights reserved.
          </Typography>

          <Grid container justifyContent="space-between">
            <IconButton
              sx={{
                color: "#fff",
                fontSize: "1.25rem",
              }}
              // className={classes.icon}
              aria-label="LinkedIn"
              href="https://www.linkedin.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <LinkedInIcon />
            </IconButton>
            <IconButton
              // className={classes.icon}
              aria-label="GitHub"
              href="https://github.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <GitHubIcon />
            </IconButton>

            <IconButton
              // className={classes.icon}
              aria-label="GitHub"
              href="https://github.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <TwitterIcon />
            </IconButton>
          </Grid>
        </Container>
      </Grid>
    </div>
  );
};

export default Footer2;
