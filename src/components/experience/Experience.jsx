import React, { useState } from "react";
import Section from "../Section";
import SectionHeader from "../SectionHeader";
import {
  Box,
  Typography,
  Tabs,
  Tab,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import FadeInSection from "../FadeInView";
import { experiencesList as experiences } from "./ExperienceList";

function Experience() {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const handleTabChange = (event, newValue) => {
    setSelectedIndex(newValue);
  };

  const selectedExp = experiences[selectedIndex];

  return (
    <FadeInSection>
      <Section id="experience">
        <SectionHeader>/ Experience</SectionHeader>

        <Box sx={{ width: "100%", mt: 4 }}>
          {/* Tabs - Horizontal on desktop, scrollable on mobile */}
          <Box
            sx={{
              borderBottom: 1,
              borderColor: "divider",
              mb: 4,
              overflowX: isMobile ? "auto" : "visible",
              "& .MuiTabs-scroller": {
                overflow: isMobile ? "auto !important" : "hidden !important",
              },
            }}
          >
            <Tabs
              value={selectedIndex}
              onChange={handleTabChange}
              variant={isMobile ? "scrollable" : "standard"}
              scrollButtons={isMobile ? "auto" : false}
              allowScrollButtonsMobile
              sx={{
                "& .MuiTab-root": {
                  color: "text.secondary",
                  fontSize: isMobile
                    ? theme.typography.subtitle2.fontSize
                    : theme.typography.subtitle1.fontSize,
                  minWidth: { xs: 120, md: 150 },
                  "&.Mui-selected": {
                    color: theme.palette.primary.main,
                  },
                },
                "& .MuiTabs-indicator": {
                  backgroundColor: theme.palette.primary.main,
                },
              }}
            >
              {experiences.map((exp) => (
                <Tab
                  key={exp.company}
                  label={exp.company}
                  sx={{ textTransform: "none" }}
                />
              ))}
            </Tabs>
          </Box>

          {/* Experience Content */}
          <Box
            sx={{
              display: "flex",
              flexDirection: { xs: "column", md: "row" },
              gap: 4,
            }}
          >
            {/* Left side - Job details */}
            <Box sx={{ flex: 1 }}>
              <Typography variant="h6" sx={{ fontWeight: 600, mb: 1 }}>
                {selectedExp.title}{" "}
                <Box
                  component="span"
                  sx={{ color: theme.palette.primary.main }}
                >
                  @ {selectedExp.company}
                </Box>
              </Typography>

              <Typography
                variant="subtitle1"
                sx={{ color: "text.secondary", mb: 3 }}
              >
                {selectedExp.period} • {selectedExp.location}
              </Typography>

              <Box
                component="ul"
                sx={{
                  pl: 2,
                  mb: 3,
                  "& li": {
                    mb: 1.5,
                    color: "text.primary",
                    lineHeight: 1.6,
                  },
                }}
              >
                {selectedExp.description.map((item, index) => (
                  <Box
                    component="li"
                    key={index}
                    variant="body1"
                    sx={{
                      color: theme.palette.text.primary,
                      listStyle: "none",
                      mb: 1.5,
                      position: "relative",
                      //   pl: 2,
                      transition: "transform 0.2s ease, color 0.2s ease",
                      "&:hover": {
                        transform: "translateX(8px)",
                        color: theme.palette.primary.main,
                      },
                      "&::before": {
                        content: '"▹"',
                        position: "absolute",
                        left: "-1.1rem",
                        color: theme.palette.primary.main,
                        transition: "transform 0.2s ease",
                      },
                      "&:hover::before": {
                        transform: "scale(1.5)",
                      },
                    }}
                  >
                    {item}
                  </Box>
                ))}
              </Box>

              {/* Skills */}
              <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1 }}>
                {selectedExp.skills.map((skill, index) => (
                  <Box
                    key={index}
                    sx={{
                      px: 2,
                      py: 0.5,
                      borderRadius: 1,
                      backgroundColor: "rgba(100, 255, 218, 0.1)",
                      border: "1px solid rgba(100, 255, 218, 0.2)",
                      color: "#64ffda",
                      fontSize: "0.875rem",
                      fontFamily: "'Fira Code', monospace",
                    }}
                  >
                    {skill}
                  </Box>
                ))}
              </Box>
            </Box>

            {/* Right side - logo display */}
            <Box
              sx={{
                flex: 0.5,
                display: { xs: "none", md: "flex" },
                alignItems: "flex-start",
                justifyContent: "center",
                pt: 2,
              }}
            >
              <Box
                sx={{
                  width: 200,
                  height: 200,
                  borderRadius: 2,
                  backgroundColor: "white",
                  border: "1px solid rgba(100, 255, 218, 0.2)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  p: 3,
                  boxShadow: "0 8px 30px rgba(0,0,0,0.12)",
                }}
              >
                <Box
                  component="img"
                  src={selectedExp.logo}
                  alt={`${selectedExp.company} logo`}
                  sx={{
                    width: "100%",
                    height: "100%",
                    objectFit: "contain",
                    maxWidth: "100%",
                    maxHeight: "100%",
                  }}
                />
              </Box>
            </Box>
          </Box>
        </Box>
      </Section>
    </FadeInSection>
  );
}

export default Experience;
