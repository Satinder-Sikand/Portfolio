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
        fontSize: "2.1rem",
        "@media (min-width:900px)": {
          fontSize: "3.8rem",
        },
      },
      h5: {
        color: "#ccd6f6",
      },
      subtitle2: {
        fontSize: "0.87rem",
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
    </ThemeProvider>
  );
}
