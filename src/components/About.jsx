import React from "react";
import { Box, Typography, Grid, useTheme } from "@mui/material";
import aboutMeImage from "../assets/images/me_near_a_pond.jpg";
import SectionHeader from "./SectionHeader";
import BodyTypography from "./BodyTypography";
import FadeInSection from "./FadeInView";
import Section from "./Section";

function About() {
  const technologies = [
    "JavaScript (ES6+)",
    "TypeScript",
    "Python",
    "Java",
    "Docker & Kubernetes",
    "SQL & NoSQL",
    "AWS",
    "Git",
  ];

  return (
    <FadeInSection>
      <Section id="about">
        {/* Header */}
        <SectionHeader>/ About Me</SectionHeader>

        <Grid
          container
          spacing={{ xs: 1, md: 2 }}
          alignItems="flex-start"
          //   sx={{ border: "1px solid red" }}
        >
          {/* Text Column */}
          <Grid
            item
            xs={12}
            md={7}
            order={{ xs: 2, sm: 2, md: 1 }}
            sx={{
              //   border: "1px solid red",
              flexBasis: { md: "60%" },
              paddingTop: { md: "1em" },
            }}
          >
            <Box>
              <BodyTypography>
                I am currently a
                <HighLightText> Java Full Stack Developer</HighLightText> at
                <HighLightText> Redwood Software</HighLightText>, where I help
                develop code and actions to automate custom workflows.
                Previously, I was at
                <HighLightText> UnifyApps</HighLightText> and
                <HighLightText> Amazon</HighLightText>. I completed my Bachelors
                of Software Engineering from York University in 2023.
              </BodyTypography>
              <BodyTypography>
                I specialize in back-end development with a focus on creating
                efficient and scalable applications. Whether it's shifting from
                in-memory pipelines to streaming or CRUD based REST API's, I do
                it all. With writing automated test cases thrown in as well, to
                make sure everything works as expected.
              </BodyTypography>

              <Typography variant="body1">
                These are some technologies I have been working with:
              </Typography>
              <Grid container spacing={2}>
                <TechnologiesListSplit
                  technologies={technologies}
                  start={0}
                  end={Math.ceil(technologies.length / 2)}
                ></TechnologiesListSplit>
                <TechnologiesListSplit
                  technologies={technologies}
                  start={Math.ceil(technologies.length / 2)}
                  sx={{ pl: 2 }}
                ></TechnologiesListSplit>
              </Grid>
              <BodyTypography>
                Outside of work, I love literary fiction, and am a bit of a
                gamer if I do say so myself. I like single player games, but
                play the occasional esports title.
              </BodyTypography>
            </Box>
          </Grid>

          {/* Image Column */}
          <Grid
            item
            xs={12}
            md={5}
            order={{ xs: 1, sm: 1, md: 2 }}
            sx={{
              //   border: "1px solid red",
              margin: "auto",
            }}
          >
            <Box
              sx={{
                position: "relative",
                width: { xs: "70%", md: "90%" },
                maxWidth: "350px",
                mx: "auto",
              }}
            >
              <Box
                sx={{
                  width: "100%",
                  borderRadius: "8px",
                  overflow: "hidden",
                  // Only apply cropping on small screens
                  "@media (max-width: 600px)": {
                    height: "75vw", // visible height (adjust as needed)
                  },
                }}
              >
                <Box
                  component="img"
                  src={aboutMeImage}
                  alt="Satinder"
                  sx={{
                    width: "100%",
                    height: "auto",
                    display: "block",
                    borderRadius: "8px",
                    transition: "transform 0.5s ease",
                    "&:hover": {
                      transform: "scale(1.05)",
                    },
                    "@media (max-width: 600px)": {
                      transform: "translateY(-10%)",
                    },
                  }}
                />
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Section>
    </FadeInSection>
  );
}

function TechnologiesListSplit({ technologies, start, end, sx = {} }) {
  const theme = useTheme();
  return (
    <Grid item xs={12} sm={6}>
      <Box component="ul" sx={{ pl: 0, listStyleType: "none", ...sx }}>
        {technologies.slice(start, end).map((tech, index) => (
          <Box
            component="li"
            key={index}
            sx={{
              color: theme.palette.text.primary,
              mb: 1.5,
              position: "relative",
              pl: 2,
              transition: "transform 0.2s ease, color 0.2s ease",
              "&:hover": {
                transform: "translateX(8px)",
                color: theme.palette.primary.main,
              },
              "&::before": {
                content: '"▹"',
                position: "absolute",
                left: 0,
                color: theme.palette.primary.main,
                transition: "transform 0.2s ease",
              },
              "&:hover::before": {
                transform: "scale(1.5)",
              },
            }}
          >
            {tech}
          </Box>
        ))}
      </Box>
    </Grid>
  );
}

function HighLightText({ children }) {
  const theme = useTheme();
  return (
    <Box display="inline" sx={{ color: theme.palette.primary.main }}>
      {children}
    </Box>
  );
}

export default About;
