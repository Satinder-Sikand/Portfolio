import {
  Box,
  Typography,
  Chip,
  Button,
  IconButton,
  useTheme,
  Modal,
  Fade,
  Backdrop,
  Grid,
} from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import CloseIcon from "@mui/icons-material/Close";

function ProjectModal({ selectedProject, handleCloseModal, isMobile }) {
  const theme = useTheme();
  return (
    <Modal
      open={!!selectedProject}
      onClose={handleCloseModal}
      closeAfterTransition
      slots={{ backdrop: Backdrop }}
      slotProps={{
        backdrop: {
          timeout: 500,
        },
      }}
    >
      <Fade in={!!selectedProject}>
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: isMobile ? "90%" : "80%",
            maxWidth: 800,
            maxHeight: "90vh",
            overflow: "auto",
            backgroundColor: theme.palette.background.default,
            border: "2px solid rgba(100, 255, 218, 0.2)",
            borderRadius: 2,
            boxShadow: "0 20px 60px rgba(0,0,0,0.5)",
            outline: "none",
            p: 4,
          }}
        >
          {selectedProject && (
            <>
              {/* Close Button */}
              <IconButton
                onClick={handleCloseModal}
                sx={{
                  position: "absolute",
                  right: 16,
                  top: 16,
                  color: theme.palette.primary.main,
                  backgroundColor: "rgba(17, 34, 64, 0.5)",
                  "&:hover": {
                    backgroundColor: "rgba(100, 255, 218, 0.1)",
                  },
                }}
              >
                <CloseIcon />
              </IconButton>

              {/* Modal Content */}
              <Grid container spacing={4}>
                {/* Left Column - Image */}
                <Grid item xs={12} md={6}>
                  <Box
                    component="img"
                    src={selectedProject.image}
                    alt={selectedProject.title}
                    sx={{
                      width: "100%",
                      height: 300,
                      objectFit: "cover",
                      borderRadius: 2,
                      border: "1px solid rgba(100, 255, 218, 0.2)",
                    }}
                  />
                </Grid>

                {/* Right Column - Details */}
                <Grid item xs={12} md={6}>
                  <Typography
                    variant="h5"
                    sx={{
                      fontWeight: 600,
                      mb: 2,
                      color: theme.palette.text.primary,
                    }}
                  >
                    {selectedProject.title}
                  </Typography>

                  <Chip
                    label={selectedProject.category}
                    sx={{
                      mb: 3,
                      backgroundColor: "rgba(100, 255, 218, 0.1)",
                      color: theme.palette.primary.main,
                      fontWeight: 500,
                    }}
                  />

                  {/* Long Description */}
                  <Typography
                    variant="body1"
                    sx={{
                      mb: 4,
                      color: theme.palette.text.secondary,
                      lineHeight: 1.8,
                    }}
                  >
                    {selectedProject.longDescription}
                  </Typography>

                  {/* Technologies */}
                  <Typography
                    variant="h6"
                    sx={{ mb: 2, color: theme.palette.text.primary }}
                  >
                    Technologies Used
                  </Typography>
                  <Box
                    sx={{ display: "flex", flexWrap: "wrap", gap: 1, mb: 4 }}
                  >
                    {selectedProject.technologies.map((tech, index) => (
                      <Typography
                        key={index}
                        variant="body2"
                        sx={{
                          px: 2,
                          py: 1,
                          backgroundColor: "rgba(100, 255, 218, 0.05)",
                          color: theme.palette.primary.main,
                          borderRadius: 1,
                          fontFamily: "'Fira Code', monospace",
                        }}
                      >
                        {tech}
                      </Typography>
                    ))}
                  </Box>

                  {/* Links */}
                  <Box sx={{ display: "flex", gap: 2 }}>
                    <Button
                      variant="contained"
                      href={selectedProject.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      startIcon={<GitHubIcon />}
                      sx={{
                        backgroundColor: "rgba(100, 255, 218, 0.1)",
                        color: theme.palette.primary.main,
                        border: "1px solid rgba(100, 255, 218, 0.3)",
                        "&:hover": {
                          backgroundColor: "rgba(100, 255, 218, 0.2)",
                        },
                      }}
                    >
                      GitHub
                    </Button>
                    {selectedProject.demo && (
                      <Button
                        variant="outlined"
                        href={selectedProject.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        startIcon={<OpenInNewIcon />}
                        sx={{
                          color: theme.palette.primary.main,
                          borderColor: "rgba(100, 255, 218, 0.3)",
                          "&:hover": {
                            borderColor: theme.palette.primary.main,
                            backgroundColor: "rgba(100, 255, 218, 0.05)",
                          },
                        }}
                      >
                        Live Demo
                      </Button>
                    )}
                  </Box>
                </Grid>
              </Grid>
            </>
          )}
        </Box>
      </Fade>
    </Modal>
  );
}

export default ProjectModal;
