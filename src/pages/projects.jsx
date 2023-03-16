import React from "react";
import {
  Container,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Typography,
  Button,
  useTheme,
} from "@mui/material";
import { GradientOverlay } from "./about";
import profileImg from "../assets/104220384.jpeg";

const projects = [
  {
    id: 1,
    title: "Project 1",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean id purus ex.",
    // image: "https://picsum.photos/300/200?random=1",
    image: `${profileImg}`,

    link: "https://github.com",
  },
  {
    id: 2,
    title: "Project 2",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean id purus ex.",
    image: "https://picsum.photos/300/200?random=2",

    link: "https://github.com",
  },
  {
    id: 3,
    title: "Project 3",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean id purus ex.",
    image: "https://picsum.photos/300/200?random=3",
    link: "https://github.com",
  },
  {
    id: 4,
    title: "Project 4",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean id purus ex.",
    image: "https://picsum.photos/300/200?random=4",
    link: "https://github.com",
  },
];

const projects2 = [
  {
    title: "A Tour Aplication",
    image: "images/Tour.png",
    link: "https://tours-9w4s.onrender.com",
  },
  {
    title: "An E-commerce Aplication",
    image: "images/E-commerce.png",
    link: "https://lukesecommerce.onrender.com",
  },
  {
    title: "Everyday Todo Aplication",
    image: "images/Todo.png",
    link: "https://lukestodo.onrender.com/",
  },
];

const Projects = () => {
  const theme = useTheme();
  const neutralLight = theme.palette.neutral.light;
  const dark = theme.palette.neutral.dark;
  const background = theme.palette.background.default;
  const primaryLight = theme.palette.primary.light;
  const alt = theme.palette.background.alt;

  return (
    <div style={{ backgroundColor: background }}>
      <GradientOverlay />
      <Container sx={{ py: 10 }}>
        <Typography
          variant="h3"
          component="h2"
          align="center"
          sx={{ mb: 4, fontWeight: "bold", color: dark }}
        >
          Portfolio Projects
        </Typography>
        <Grid container spacing={4}>
          {projects.map((project) => (
            <Grid key={project.id} item xs={12} sm={6} md={4}>
              <Card
                sx={{
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <CardMedia
                  component="img"
                  //   height="140"
                  height="100%"
                  image={project.image}
                  alt={project.title}
                  //   sx={{ paddingTop: "56.25%" }}
                />
                <CardContent sx={{ flexGrow: 1 }}>
                  <Typography
                    gutterBottom
                    variant="h3"
                    component="h3"
                    sx={{ fontWeight: "bold" }}
                  >
                    {project.title}
                  </Typography>
                  <Typography variant="h5" color="text.secondary">
                    {project.description}
                  </Typography>
                </CardContent>
                <Button
                  variant="contained"
                  href={project.link}
                  target="_blank"
                  sx={{ mt: 2, mb: 2, backgroundColor: "#0099ff" }}
                >
                  View Project
                </Button>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </div>
  );
};

export default Projects;
