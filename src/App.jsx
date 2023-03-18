import { useState } from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import "./App.css";
import Navbar from "./components/navbar/index";
import HomePage from "./pages/home";
import { useMemo } from "react";
import { useSelector } from "react-redux";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { createTheme } from "@mui/material/styles";
import { themeSettings } from "./theme";
import AboutPage from "./pages/about";
import Projects from "./pages/projects";
import Footer from "./components/footer";
import ContactPage from "./pages/contact";
import BlogPage from "./pages/blog/blogPage";
import BlogPage2 from "./pages/blog/blogPage2";
import SingleBlogPage from "./pages/blog/singleBlogPage";

function App() {
  const { mode } = useSelector((state) => state.auth);
  const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]);

  return (
    <div className="">
      <ThemeProvider theme={theme}>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/blog" element={<BlogPage2 />} />
          <Route path="/blog-write" element={<BlogPage />} />

          <Route path="/blog/:postId" element={<SingleBlogPage />} />
        </Routes>
        <Footer />
      </ThemeProvider>
    </div>
  );
}

export default App;
