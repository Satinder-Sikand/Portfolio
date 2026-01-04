import React, { useState } from "react";
import Section from "../Section";
import SectionHeader from "../SectionHeader";
import {
  Box,
  Typography,
  Button,
  IconButton,
  useTheme,
  useMediaQuery,
  Grid,
} from "@mui/material";
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";

// Project images - replace with your actual project images
import ProjectCard from "./ProjectCard";
import ProjectModal from "./ProjectModal";
import { projects } from "./ProjectsList";
import FadeInSection from "../FadeInView";

function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);
  // Current slide index
  const [currentIndex, setCurrentIndex] = useState(0);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  // How many projects in carosel slide depending on screen size
  const projectsPerView = isMobile ? 1 : 2;
  const totalSlides = Math.ceil(projects.length / projectsPerView);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % totalSlides);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  const handleOpenModal = (project) => {
    setSelectedProject(project);
  };

  const handleCloseModal = () => {
    setSelectedProject(null);
  };

  // Get visible projects based on current index
  const visibleProjects = projects.slice(
    currentIndex * projectsPerView,
    (currentIndex + 1) * projectsPerView
  );

  return (
    <FadeInSection>
      <Section id="projects">
        <SectionHeader>/ Projects</SectionHeader>
        {/* Section description */}
        <Typography
          variant="h6"
          sx={{
            textAlign: "center",
            mb: 1,
            color: theme.palette.text.secondary,
          }}
        >
          A selection of things I've built
        </Typography>

        {/* Carousel Container */}
        <Box sx={{ position: "relative", width: "100%", mb: 8 }}>
          {/* Navigation Buttons */}
          {!isMobile && (
            <>
              <IconButton
                onClick={handlePrev}
                sx={{
                  position: "absolute",
                  left: 0,
                  top: "50%",
                  transform: "translateY(-50%)",
                  color: theme.palette.primary.main,
                  backgroundColor: "rgba(17, 34, 64, 0.8)",
                  border: "1px solid rgba(100, 255, 218, 0.3)",
                  zIndex: 2,
                  "&:hover": {
                    backgroundColor: "rgba(100, 255, 218, 0.1)",
                  },
                }}
              >
                <NavigateBeforeIcon sx={{ margin: 0 }} />
              </IconButton>
              <IconButton
                onClick={handleNext}
                sx={{
                  position: "absolute",
                  right: 0,
                  top: "50%",
                  transform: "translateY(-50%)",
                  color: theme.palette.primary.main,
                  backgroundColor: "rgba(17, 34, 64, 0.8)",
                  border: "1px solid rgba(100, 255, 218, 0.3)",
                  zIndex: 2,
                  "&:hover": {
                    backgroundColor: "rgba(100, 255, 218, 0.1)",
                  },
                }}
              >
                <NavigateNextIcon />
              </IconButton>
            </>
          )}

          {/* Carousel */}
          <Grid container spacing={4} justifyContent="center">
            {visibleProjects.map((project) => (
              <Grid item xs={12} sm={6} lg={4} key={project.id}>
                <ProjectCard
                  project={project}
                  handleOpenModal={(proj) => {
                    handleOpenModal(proj);
                  }}
                ></ProjectCard>
              </Grid>
            ))}
          </Grid>

          {/* Carousel Indicators */}
          <Box
            sx={{ display: "flex", justifyContent: "center", mt: 4, gap: 1 }}
          >
            {Array.from({ length: totalSlides }).map((_, index) => (
              <Box
                key={index}
                onClick={() => setCurrentIndex(index)}
                sx={{
                  width: 12,
                  height: 12,
                  borderRadius: "50%",
                  backgroundColor:
                    currentIndex === index
                      ? theme.palette.primary.main
                      : "rgba(100, 255, 218, 0.3)",
                  cursor: "pointer",
                  transition: "all 0.3s ease",
                  "&:hover": {
                    backgroundColor:
                      currentIndex === index
                        ? theme.palette.primary.main
                        : "rgba(100, 255, 218, 0.5)",
                  },
                }}
              />
            ))}
          </Box>
        </Box>

        {/* Mobile Navigation */}
        {isMobile && (
          <Box
            sx={{ display: "flex", justifyContent: "center", gap: 2, mb: 4 }}
          >
            <IconButton
              onClick={handlePrev}
              sx={{
                color: theme.palette.primary.main,
                backgroundColor: "rgba(17, 34, 64, 0.8)",
                border: "1px solid rgba(100, 255, 218, 0.3)",
                "&:hover": {
                  backgroundColor: "rgba(100, 255, 218, 0.1)",
                },
              }}
            >
              <NavigateBeforeIcon />
            </IconButton>
            <IconButton
              onClick={handleNext}
              sx={{
                color: theme.palette.primary.main,
                backgroundColor: "rgba(17, 34, 64, 0.8)",
                border: "1px solid rgba(100, 255, 218, 0.3)",
                "&:hover": {
                  backgroundColor: "rgba(100, 255, 218, 0.1)",
                },
              }}
            >
              <NavigateNextIcon />
            </IconButton>
          </Box>
        )}

        {/* Project Details Modal */}
        <ProjectModal
          selectedProject={selectedProject}
          handleCloseModal={handleCloseModal}
          isMobile={isMobile}
        ></ProjectModal>

        {/* View All Button */}
        <Box sx={{ textAlign: "center", mt: 4 }}>
          <Button
            variant="outlined"
            size="large"
            sx={{
              px: 4,
              py: 1.5,
              color: theme.palette.primary.main,
              borderColor: "rgba(100, 255, 218, 0.3)",
              fontSize: "1rem",
              fontWeight: 500,
              "&:hover": {
                borderColor: theme.palette.primary.main,
                backgroundColor: "rgba(100, 255, 219, 0.09)",
                transform: "translateY(-2px)",
                color: theme.palette.primary.main,
              },
              transition: "all 0.3s ease",
            }}
            href="https://github.com/Satinder-Sikand"
            target="_blank"
            rel="noopener noreferrer"
          >
            View All Projects on GitHub
          </Button>
        </Box>
      </Section>
    </FadeInSection>
  );
}

export default Projects;
