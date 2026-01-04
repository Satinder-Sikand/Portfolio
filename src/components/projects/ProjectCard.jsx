import React, { useState } from "react";
import {
  useTheme,
  Box,
  Typography,
  Card,
  CardContent,
  CardMedia,
  CardActions,
  Chip,
  Button,
  IconButton,
} from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";

function ProjectCard({ project, handleOpenModal }) {
  const [hovered, setHovered] = useState(false);
  const theme = useTheme();

  return (
    <Card
      onMouseEnter={() => setHovered(project.id)}
      onMouseLeave={() => setHovered(false)}
      sx={{
        height: 500, // Fixed height
        display: "flex",
        flexDirection: "column",
        backgroundColor: "rgba(17, 34, 64, 0.5)",
        border: "1px solid rgba(100, 255, 218, 0.1)",
        borderRadius: 2,
        overflow: "hidden",
        transition: "all 0.3s ease",
        transform: hovered === project.id ? "translateY(-8px)" : "none",
        boxShadow:
          hovered === project.id
            ? "0 20px 40px rgba(0,0,0,0.3)"
            : "0 10px 20px rgba(0,0,0,0.2)",
        position: "relative",
        // width: "100%", // Ensure uniform width
        width: "400px",
        "&:before": {
          content: '""',
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          height: 4,
          background: `linear-gradient(90deg, ${theme.palette.primary.main}, ${theme.palette.background.default})`,
        },
      }}
    >
      {/* Project Image - Fixed Height */}
      <Box sx={{ position: "relative", overflow: "hidden", height: 200 }}>
        <CardMedia
          component="img"
          height="200"
          image={project.image}
          alt={project.title}
          sx={{
            width: "100%",
            height: "100%",
            objectFit: "cover", // Ensures uniform image display
            transition: "transform 0.5s ease",
            transform: hovered === project.id ? "scale(1.05)" : "scale(1)",
            filter:
              hovered === project.id ? "brightness(0.8)" : "brightness(0.7)",
          }}
        />
        <Box
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background:
              "linear-gradient(to bottom, transparent 0%, rgba(10, 25, 47, 0.9) 100%)",
            opacity: 0.3,
          }}
        />
      </Box>
      {/* Card Content - Fixed Height */}
      <CardContent
        sx={{
          flexGrow: 1,
          p: 3,
          display: "flex",
          flexDirection: "column",
          height: "calc(500px - 200px - 72px)", // Total - image - actions
        }}
      >
        {/* Category */}
        <Chip
          label={project.category}
          size="small"
          sx={{
            mb: 2,
            backgroundColor: "rgba(100, 255, 218, 0.1)",
            color: theme.palette.primary.main,
            fontSize: "0.75rem",
            fontWeight: 500,
            alignSelf: "flex-start",
          }}
        />
        {/* Title */}
        <Typography
          variant="h6"
          sx={{
            fontWeight: 600,
            // mb: 1.5,
            color: theme.palette.text.primary,
            flexShrink: 0,
            fontSize: "1.2rem",
            "@media (min-width:900px)": {
              fontSize: "2.0rem",
            },
          }}
        >
          {project.title}
        </Typography>
        {/* Description - Fixed Height with Ellipsis */}
        <Typography
          variant="body2"
          sx={{
            mb: 2,
            color: theme.palette.text.secondary,
            lineHeight: 1.6,
            flexGrow: 1,
            overflow: "hidden",
            display: "-webkit-box",
            WebkitLineClamp: 3,
            WebkitBoxOrient: "vertical",
          }}
        >
          {project.description}
        </Typography>
        {/* Technologies */}
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            gap: 1,
            mt: "auto",
          }}
        >
          {project.technologies.slice(0, 3).map((tech, index) => (
            <Typography
              key={index}
              variant="caption"
              sx={{
                px: 1.5,
                py: 0.5,
                backgroundColor: "rgba(100, 255, 218, 0.05)",
                color: theme.palette.primary.main,
                borderRadius: 1,
                fontFamily: "'Fira Code', monospace",
                fontSize: "0.75rem",
                whiteSpace: "nowrap",
              }}
            >
              {tech}
            </Typography>
          ))}
          {project.technologies.length > 3 && (
            <Typography
              variant="caption"
              sx={{
                px: 1.5,
                py: 0.5,
                backgroundColor: "rgba(100, 255, 218, 0.05)",
                color: theme.palette.primary.main,
                borderRadius: 1,
                fontFamily: "'Fira Code', monospace",
                fontSize: "0.75rem",
              }}
            >
              +{project.technologies.length - 3}
            </Typography>
          )}
        </Box>
      </CardContent>
      {/* Actions - Fixed Height */}
      <CardActions
        sx={{
          p: 3,
          pt: 0,
          justifyContent: "space-between",
          height: 72,
        }}
      >
        <Box>
          <IconButton
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            sx={{
              color: theme.palette.text.secondary,
              "&:hover": {
                color: theme.palette.primary.main,
                transform: "translateY(-2px)",
              },
              transition: "all 0.2s ease",
            }}
          >
            <GitHubIcon />
          </IconButton>
          {project.demo && (
            <IconButton
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              sx={{
                color: theme.palette.text.secondary,
                "&:hover": {
                  color: theme.palette.primary.main,
                  transform: "translateY(-2px)",
                },
                transition: "all 0.2s ease",
              }}
            >
              <OpenInNewIcon />
            </IconButton>
          )}
        </Box>
        <Button
          size="small"
          onClick={() => handleOpenModal(project)}
          sx={{
            color: theme.palette.primary.main,
            borderColor: "rgba(100, 255, 218, 0.3)",
            "&:hover": {
              borderColor: theme.palette.primary.main,
              backgroundColor: "rgba(100, 255, 218, 0.05)",
            },
          }}
          variant="outlined"
        >
          View Details
        </Button>
      </CardActions>
    </Card>
  );
}

export default ProjectCard;
