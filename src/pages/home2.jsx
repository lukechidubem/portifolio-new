import { Box, Container, Typography, Button } from "@mui/material";
import { styled } from "@mui/material/styles";
import { keyframes } from "@emotion/react";
import profileImg from "../assets/104220384.jpeg";

// keyframes for typing animation
const typing = keyframes`
  from { width: 0 }
  to { width: 100% }
`;

// styled components for the section, home info, and typing text container
const Section = styled("section")({
  position: "relative",
  minHeight: "100vh",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
});

const HomeInfo = styled("div")({
  maxWidth: "600px",
  width: "100%",
  marginRight: "40px",
  textAlign: "left",
  animation: `${typing} 2s steps(20) 1s forwards`,
});

const TypingTextContainer = styled("div")({
  marginTop: "30px",
});

// main component
const Home2 = () => {
  return (
    <Section id="home">
      <Box sx={{ position: "absolute", top: 0, left: 0 }}>
        <img src={profileImg} alt="profile" />
      </Box>
      <Container maxWidth="lg">
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <HomeInfo>
            <Typography variant="h3" sx={{ fontWeight: "bold" }}>
              Hello, my name is{" "}
              <Typography component="span" sx={{ color: "primary.main" }}>
                Ezeji Chidubem Luke
              </Typography>
            </Typography>
            <TypingTextContainer>
              <Typography variant="h3" sx={{ fontWeight: "bold" }}>
                I'm a{" "}
                <Typography
                  component="span"
                  sx={{
                    color: "primary.main",
                    display: "inline-block",
                    overflow: "hidden",
                    whiteSpace: "nowrap",
                    verticalAlign: "bottom",
                  }}
                >
                  Web Developer
                </Typography>
              </Typography>
            </TypingTextContainer>
            <Typography variant="body1" sx={{ marginTop: "30px" }}>
              I am a proactive Full-Stack Software Developer with a background
              in Business Management. Possess strong skills in problem solving,
              communication, collaboration that leads to quality products &
              results. I am eager to expand my knowledge and implement what I
              have learned in a practical and professional environment.
            </Typography>
            <Button
              href="https://docs.google.com/document/d/1clavshRxP8PBiUHbz2JYnDFcSdpgYMzpv7BbJA-LIRc/edit"
              variant="contained"
              sx={{ marginTop: "30px" }}
            >
              Download CV
            </Button>
          </HomeInfo>
          <Box sx={{ flex: "1 1 0" }}>
            <img src={profileImg} alt="avatar" />
          </Box>
        </Box>
      </Container>
    </Section>
  );
};

export default Home2;
