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
import Todo from "../assets/Todo.png";
import Tour from "../assets/Tour.png";
import Ecommerce from "../assets/E-commerce.png";

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
    id: 1,
    title: "A Tour Aplication",
    image: `${Tour}`,
    description:
      "A Nodejs, Express and MongoDB with Pug templating Tour application. The application allows users to register, login, edit profile, change password, reset password, book tours, make payment, receive mails and much more. It also has admin functionalities.",
    link: "https://tours-9w4s.onrender.com",
  },
  {
    id: 2,
    title: "An E-commerce Aplication",
    image: `${Ecommerce}`,
    description:
      "A React, Nodejs, Express and MongoDB E-commerce application. This application allows users to register, login, edit profile, order for products, make payment, view order history and much more. It also has Admin pages like, dashboard and all other Admin functionalities.",
    link: "https://lukesecommerce.onrender.com",
  },
  {
    id: 3,
    title: "Everyday Todo Aplication",
    description: "A vary handy todo application for your every day use",
    image: `${Todo}`,
    link: "https://lukestodo.onrender.com/",
  },

  {
    id: 4,
    title: "Food Recipe Aplication",
    description:
      "A MVC pattern and modern Javascript application of a food recipe. Implemented using food recipe API from Forkify API . The application allows the user to search and view various kinds of food and how to cook them. Users will also be able to add, remove or bookmark custom food recipes. ",
    image:
      "https://media.istockphoto.com/id/628097352/photo/fresh-vegetables.jpg?s=612x612&w=is&k=20&c=DPzQbAG4nekhx3RdylzJWXjGhGe9WRdXz3Pz4m1w6D4=",
    link: "https://github.com/lukechidubem/Food-recipe-app.git",
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
          {projects2.map((project) => (
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
