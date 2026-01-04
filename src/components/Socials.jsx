import { Box, IconButton, useTheme } from "@mui/material";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import InstagramIcon from "@mui/icons-material/Instagram";
import EmailIcon from "@mui/icons-material/Email";

function Socials({ size, justifyContent }) {
  const theme = useTheme();
  const socialLinks = [
    {
      platform: "Github",
      icon: <GitHubIcon />,
      url: "https://github.com/Satinder-Sikand/",
    },
    {
      platform: "LinkedIn",
      icon: <LinkedInIcon />,
      url: "https://linkedin.com/in/satindersikand/",
    },
    {
      platform: "Instagram",
      icon: <InstagramIcon />,
      url: "https://instagram.com/s.sikand/",
    },
    {
      platform: "Email",
      icon: <EmailIcon />,
      url: "mailto:ssatin360@gmail.com",
    },
  ];

  const handleSocialClick = (url) => {
    window.open(url, "_blank");
  };

  return (
    <Box
      display="flex"
      justifyContent={justifyContent}
      width="100%"
      mt={2}
      gap={{ xs: 1.5, md: 2 }}
    >
      {socialLinks.map((link) => (
        <IconButton
          key={link.platform}
          onClick={() => handleSocialClick(link.url)}
          aria-label={`Visit my ${link.platform}`}
          sx={{
            color: theme.palette.text.secondary,
            border: "1px solid rgba(100, 255, 218, 0.2)",
            "&:hover": {
              color: theme.palette.primary.main,
              borderColor: theme.palette.primary.main,
              backgroundColor: "rgba(100, 255, 218, 0.1)",
              transform: "rotate(-15deg) translateY(-3px)",
            },
            transition: "all 0.3s ease",
            padding: size,
          }}
        >
          {link.icon}
        </IconButton>
      ))}
    </Box>
  );
}

export default Socials;
