// App.jsx
import * as React from "react";
import NavBar from "./components/NavBar";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Container,
  Box,
  CssBaseline,
} from "@mui/material";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Hero from "./components/Hero";
import About from "./components/About";

export default function App() {
  const theme = createTheme({
    palette: {
      mode: "light",
      background: {
        default: "#0a192f",
        paper: "#112240",
      },
      primary: {
        main: "#64ffda", // mint accent
      },
      text: {
        secondary: "#ccd6f6",
        primary: "#8892b0",
      },
      headerText: {
        main: "#ccd6f6",
      },
    },
    typography: {
      fontFamily: `"Inter", "Roboto", sans-serif`,
      h1: {
        color: "secondary",
      },
      h2: {
        color: "secondary",
      },
      h3: {
        color: "secondary",
      },
      h4: {
        color: "#ccd6f6",
      },
      h5: {
        color: "secondary",
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline></CssBaseline>
      <NavBar />
      <Box id="hero">
        <Hero></Hero>
      </Box>
      <Box id="about">
        <About></About>
      </Box>
      <Box id="experience">
        <Experience></Experience>
      </Box>
      <Box id="projects">
        <Projects></Projects>
      </Box>
    </ThemeProvider>
  );
}
