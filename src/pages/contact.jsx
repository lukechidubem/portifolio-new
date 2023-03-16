import React, { useRef } from "react";
import { firestore } from "../firebase";
import {
  collection,
  addDoc,
  query,
  where,
  setDoc,
  doc,
} from "firebase/firestore";

import {
  Box,
  Button,
  Container,
  Grid,
  TextField,
  Typography,
  useTheme,
} from "@mui/material";
import { GradientOverlay } from "./about";

const ContactPage = () => {
  const messageRef = useRef();
  const nameRef = useRef();
  const emailRef = useRef();

  // const classes = useStyles();

  const theme = useTheme();
  const neutralLight = theme.palette.neutral.light;
  const dark = theme.palette.neutral.dark;
  const background = theme.palette.background.default;
  const primaryLight = theme.palette.primary.light;
  const alt = theme.palette.background.alt;

  const handleSubmit = async (event) => {
    event.preventDefault(); // prevent default form submission behavior

    const postRef = collection(firestore, "emailPosts");

    const newPostRef = doc(postRef);

    const emailId = newPostRef.id;

    // extract form data
    const formData = new FormData(event.target);

    const data = {
      name: formData.get("name"),
      email: formData.get("email"),
      message: formData.get("message"),
      emailId,
    };

    try {
      const docRef = await setDoc(newPostRef, data);

      // console.log("Document written with ID: ", docRef.id);

      alert("Emal sent successfully");

      messageRef.current.value = "";
      nameRef.current.value = "";
      emailRef.current.value = "";
    } catch (error) {
      console.error("Error sending mail: ", error);
    }
  };

  return (
    <div
      // className={classes.root}
      style={{
        backgroundColor: background,
        color: dark,
        padding: "20px",
        flexGrow: 1,
      }}
    >
      <Box sx={{ marginTop: "-35px" }}>
        <GradientOverlay />
        <Container className=" contact-about" sx={{}}>
          <Grid container spacing={2} sx={{ marginTop: "2rem" }}>
            <Grid item xs={12} md={6}>
              <Typography
                variant="h3"
                component="h2"
                align="center"
                sx={{ mb: 4, fontWeight: "bold", color: "#0099ff" }}
                gutterBottom
              >
                Get In Touch
              </Typography>
              <Typography
                variant="body1"
                sx={{ mb: 2, fontSize: "1.2rem" }}
                gutterBottom
              >
                Thanks for visiting my portfolio! I'm always interested in
                connecting with new people and exploring potential
                collaborations, so please don't hesitate to reach out if you
                have any questions, comments, or ideas.
              </Typography>
              <Typography
                variant="body1"
                sx={{ mb: 2, fontSize: "1.2rem" }}
                gutterBottom
              >
                Whether you want to discuss a potential project, ask about my
                skills and experience, or simply say hello, I'm excited to hear
                from you. You can use the form below to send me a message, and
                I'll do my best to respond as soon as possible.
              </Typography>
              <Typography
                variant="body1"
                sx={{ mb: 2, fontSize: "1.2rem" }}
                gutterBottom
              >
                Alternatively, you can connect with me on GitHub to stay
                up-to-date on my latest projects and activities. I'm also
                available for freelance work, so feel free to inquire about my
                availability and rates.
              </Typography>
              <Typography
                variant="body1"
                sx={{ mb: 1, fontSize: "1rem" }}
                gutterBottom
              >
                Phone: +2347038879424
              </Typography>
              <Typography
                variant="body1"
                sx={{ mb: 1, fontSize: "1rem" }}
                gutterBottom
              >
                Email:{" "}
                <a href="mailto:lukechidubem@gmail.com">
                  lukechidubem@gmail.com
                </a>
              </Typography>
              <Typography
                variant="body1"
                sx={{ mb: 1, fontSize: "1rem" }}
                gutterBottom
              >
                GitHub:{" "}
                <a href="https://github.com/lukechidubem">
                  https://github.com/lukechidubem
                </a>
              </Typography>
            </Grid>
            <Grid item xs={12} md={6}>
              <form
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
                // className={classes.form}
                onSubmit={handleSubmit}
              >
                <Typography
                  variant="h3"
                  component="h2"
                  align="center"
                  sx={{ mb: 4, fontWeight: "bold", color: "#0099ff" }}
                  gutterBottom
                >
                  Contact Us
                </Typography>
                <TextField
                  id="name"
                  name="name"
                  label="Name"
                  variant="outlined"
                  fullWidth
                  // margin="16px"
                  // ref={inputRef}
                  inputRef={nameRef}
                  // className={classes.textField}
                />
                <TextField
                  id="email"
                  name="email"
                  label="Email"
                  variant="outlined"
                  fullWidth
                  // margin="16px"
                  // inputRef={inputRef}
                  inputRef={emailRef}
                  // className={classes.textField}
                  sx={{ marginTop: "30px" }}
                />
                <TextField
                  id="message"
                  name="message"
                  label="Message"
                  multiline
                  rows={6}
                  variant="outlined"
                  // margin="16px"
                  fullWidth
                  inputRef={messageRef}
                  // className={classes.textField}
                  sx={{ marginTop: "30px" }}
                />
                <Button
                  variant="contained"
                  color="primary"
                  size="large"
                  type="submit"
                  sx={{
                    marginTop: "30px",
                    backgroundColor: "#0099ff",
                    px: "2rem",
                  }}
                  // className={classes.button}
                >
                  Send
                </Button>
              </form>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </div>
  );
};

export default ContactPage;
