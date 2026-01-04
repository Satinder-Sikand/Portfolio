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
import Experience from "./components/experience/Experience";
import Projects from "./components/projects/Projects";
import Hero from "./components/Hero";
import About from "./components/About";
import Footer from "./components/Footer";

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
    },
    typography: {
      fontFamily: `"Inter", "Roboto", sans-serif`,
      h1: {
        color: "#ccd6f6",
      },
      h2: {
        color: "#ccd6f6",
      },
      h3: {
        color: "#ccd6f6",
      },
      h4: {
        color: "#ccd6f6",
        fontSize: "2.2rem",
        "@media (min-width:900px)": {
          fontSize: "3.9rem",
        },
      },
      h5: {
        color: "#ccd6f6",
        fontSize: "1.9rem",
        "@media (min-width:900px)": {
          fontSize: "3.6rem",
        },
      },
      h6: {
        color: "#ccd6f6",
        fontSize: "1.4rem",
        "@media (min-width:900px)": {
          fontSize: "2.4rem",
        },
      },
      subtitle1: {
        fontSize: "1.1rem",
        "@media (min-width:900px)": {
          fontSize: "1.2rem",
        },
      },
      subtitle2: {
        fontSize: "0.97rem",
        "@media (min-width:900px)": {
          fontSize: "1.1rem",
        },
      },
      body1: {
        fontSize: "0.9rem",
        "@media (min-width:900px)": {
          fontSize: "1rem",
        },
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline></CssBaseline>
      <NavBar />
      <Hero></Hero>
      <About></About>
      <Experience></Experience>
      <Projects></Projects>
      <Footer></Footer>
    </ThemeProvider>
  );
}
