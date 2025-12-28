import { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Box,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  useTheme,
  useMediaQuery,
  Container,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

export default function NavBar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    // close menu after clicking it in mobile
    setMobileOpen(false);
  };

  // Menu items
  const navItems = [
    { label: "Home", id: "hero" },
    { label: "About", id: "about" },
    { label: "Experience", id: "experience" },
    { label: "Projects", id: "projects" },
    { label: "Contact", id: "contact" },
  ];

  // Drawer Menu for mobile screens
  const drawer = (
    <Box
      sx={{
        width: 250,
        backgroundColor: "#0a192f",
        height: "100%",
        color: "#ccd6f6",
      }}
    >
      {/* Close Icon for menu drawer */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "flex-end",
          p: 2,
          borderBottom: "1px solid rgba(255, 255, 255, 0.1)",
        }}
      >
        <IconButton
          onClick={() => setMobileOpen(false)}
          sx={{ color: "#64ffda" }}
        >
          <CloseIcon />
        </IconButton>
      </Box>
      {/* Menu navigation items */}
      <List>
        {navItems.map((item) => (
          <ListItem key={item.id} disablePadding>
            {/* Add button to each item to scroll to on click */}
            <ListItemButton
              onClick={() => scrollTo(item.id)}
              sx={{
                py: 2,
                px: 3,
                "&:hover": {
                  backgroundColor: "rgba(100, 255, 218, 0.1)",
                },
              }}
            >
              <ListItemText
                primary={item.label}
                primaryTypographyProps={{
                  // fontFamily: "'SF Mono', monospace",
                  fontSize: "0.9rem",
                  color: "#ccd6f6",
                  "&:hover": {
                    color: "#64ffda",
                  },
                }}
              />
            </ListItemButton>
          </ListItem>
        ))}

        {/* Link button to open/download the resume */}
        <ListItem disablePadding>
          <ListItemButton
            component="a"
            href="/resume.pdf"
            target="_blank"
            sx={{
              py: 2,
              px: 3,
              mt: 1,
              border: "1px solid #64ffda",
              borderRadius: "4px",
              mx: 2,
              "&:hover": {
                backgroundColor: "rgba(100, 255, 218, 0.1)",
              },
            }}
          >
            <ListItemText
              primary="Resume"
              primaryTypographyProps={{
                // fontFamily: "'SF Mono', monospace",
                fontSize: "0.9rem",
                color: "#64ffda",
                textAlign: "center",
              }}
            />
          </ListItemButton>
        </ListItem>
      </List>
    </Box>
  );

  return (
    <>
      <AppBar
        id="navbar"
        // position="fixed"
        elevation={0}
        sx={{
          backgroundColor: "rgba(10, 25, 47, 0.95)",
          backdropFilter: "blur(10px)",
          borderBottom: "1.5px solid rgba(255, 255, 255, 0.1)",
        }}
      >
        <Container maxWidth="lg">
          <Toolbar sx={{ py: 1 }}>
            <Typography
              variant="h6"
              sx={{
                flexGrow: { xs: 1, md: 0 },
                fontFamily: "'SF Mono', monospace",
                color: "#64ffda",
                fontSize: { xs: "1rem", sm: "1.25rem" },
                fontWeight: 600,
                letterSpacing: "0.5px",
              }}
            >
              Satinder Sikand
            </Typography>

            {isMobile ? (
              // Show only menu button on phone screens
              <IconButton
                color="inherit"
                edge="end"
                onClick={() => setMobileOpen(!mobileOpen)}
                sx={{
                  color: "#64ffda",
                  "&:hover": {
                    backgroundColor: "rgba(100, 255, 218, 0.1)",
                  },
                }}
              >
                <MenuIcon />
              </IconButton>
            ) : (
              // Show horizontal menu on big screens
              // OPTIMIZE CODE HERE WITH CODE IN PHONE DRAWER
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  flexGrow: 1,
                  justifyContent: "flex-end",
                  gap: 1,
                }}
              >
                {navItems.map((item) => (
                  <Button
                    key={item.id}
                    onClick={() => scrollTo(item.id)}
                    sx={{
                      color: "#ccd6f6",
                      fontFamily: "'SF Mono', monospace",
                      fontSize: "0.85rem",
                      textTransform: "none",
                      letterSpacing: "0.5px",
                      mx: 0.5,
                      px: 2,
                      py: 1,
                      minWidth: "auto",
                      "&:hover": {
                        color: "#64ffda",
                        backgroundColor: "transparent",
                      },
                    }}
                  >
                    {item.label}
                  </Button>
                ))}
                <Button
                  variant="outlined"
                  href="/resume.pdf"
                  target="_blank"
                  sx={{
                    color: "#64ffda",
                    borderColor: "#64ffda",
                    fontFamily: "'SF Mono', monospace",
                    fontSize: "0.85rem",
                    textTransform: "none",
                    letterSpacing: "0.5px",
                    ml: 2,
                    px: 3,
                    py: 0.8,
                    "&:hover": {
                      backgroundColor: "rgba(100, 255, 218, 0.1)",
                      borderColor: "#64ffda",
                    },
                  }}
                >
                  Resume
                </Button>
              </Box>
            )}
          </Toolbar>
        </Container>
      </AppBar>

      <Drawer
        anchor="right"
        open={mobileOpen}
        onClose={() => setMobileOpen(false)}
        // Leave above here for closing on clicking outside drawer
        ModalProps={{
          keepMounted: true, // Better mobile performance
        }}
        sx={{
          "& .MuiDrawer-paper": {
            boxSizing: "border-box",
            backgroundColor: "transparent",
          },
        }}
      >
        {drawer}
      </Drawer>

      {/* Add padding to prevent content from hiding behind navbar */}
      <Toolbar
        sx={{
          minHeight: { xs: "70px", sm: "80px" },
        }}
      />
    </>
  );
}
