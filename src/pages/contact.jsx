import React, { useRef } from "react";
import {
  Box,
  Button,
  Container,
  Grid,
  TextField,
  Typography,
  useTheme,
} from "@mui/material";
// import { makeStyles } from "@mui/styles";

// const useStyles = (theme) => ({
//   root: {
//     backgroundColor: theme.palette.background.default,
//     color: theme.palette.text.primary,
//     padding: theme.spacing(4, 0),
//   },
//   form: {
//     display: "flex",
//     flexDirection: "column",
//     alignItems: "center",
//   },
//   textField: {
//     // margin: theme.spacing(3, 0),
//     margin: "16px",
//   },
//   button: {
//     marginTop: theme.spacing(2),
//   },
// });

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

    // extract form data
    const formData = new FormData(event.target);
    const data = {
      name: formData.get("name"),
      email: formData.get("email"),
      message: formData.get("message"),
    };

    messageRef.current.value = "";
    nameRef.current.value = "";
    emailRef.current.value = "";

    console.log(data);

    // try {
    //   // make HTTP request to API endpoint
    //   const response = await fetch("/api/contact", {
    //     method: "POST",
    //     headers: { "Content-Type": "application/json" },
    //     body: JSON.stringify(data),
    //   });

    //   // handle response
    //   if (response.ok) {
    //     // show success message
    //     alert("Message sent successfully!");
    //   } else {
    //     // show error message
    //     alert("An error occurred while sending your message.");
    //   }
    // } catch (error) {
    //   // show error message
    //   alert("An error occurred while sending your message.");
    // }
  };

  return (
    <Box sx={{ backgroundColor: background }}>
      <Container className=" contact-about" sx={{ height: "80vh" }}>
        <Grid container spacing={2} sx={{ marginTop: "2rem" }}>
          <Grid item xs={12} md={6}>
            <Typography
              variant="h3"
              component="h2"
              align="center"
              sx={{ mb: 4, fontWeight: "bold", color: dark }}
              gutterBottom
            >
              Get In Touch
            </Typography>
            <Typography
              variant="body1"
              sx={{ mb: 2, fontSize: "1.2rem" }}
              gutterBottom
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
              euismod nibh in justo pulvinar, at lacinia quam ultricies. Donec
              quis erat eget metus vehicula finibus. In hac habitasse platea
              dictumst.
            </Typography>
            <Typography
              variant="body1"
              sx={{ mb: 2, fontSize: "1rem" }}
              gutterBottom
            >
              Phone: +2347038879424
            </Typography>
            <Typography
              variant="body1"
              sx={{ mb: 2, fontSize: "1rem" }}
              gutterBottom
            >
              Email: lukechidubem@gmail.com
            </Typography>
            <Typography
              variant="body1"
              sx={{ mb: 2, fontSize: "1rem" }}
              gutterBottom
            >
              Address: 123 Main Street, Anytown, USA
            </Typography>
          </Grid>
          <Grid item xs={12} md={6}>
            <form
              // className={classes.form}
              onSubmit={handleSubmit}
            >
              <Typography
                variant="h3"
                component="h2"
                align="center"
                sx={{ mb: 4, fontWeight: "bold", color: dark }}
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
  );
};

export default ContactPage;
