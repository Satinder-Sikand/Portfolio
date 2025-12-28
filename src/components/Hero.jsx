import React from "react";
import { Box, IconButton, Typography } from "@mui/material";
import Typewriter from "typewriter-effect";
import mint_turban from "../assets/images/mint_turban.png";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import InstagramIcon from "@mui/icons-material/Instagram";
import EmailIcon from "@mui/icons-material/Email";

function Hero() {
  return (
    <Box width="100vw" display="flex" justifyContent="center">
      <Box
        id="hero"
        minHeight={{ md: "90vh" }}
        display="flex"
        flexWrap="wrap"
        alignItems={{ sm: "flex-start", md: "center" }} // Align to top on mobile        textAlign="center"
        width="90%"
      >
        {/* image */}
        <Box
          flex="0 1 auto"
          display="flex"
          mb={{ xs: 0 }}
          sx={{
            mx: "auto",
          }}
        >
          <Box
            component="img"
            src={mint_turban}
            alt="turban image"
            width={{ xs: 290, md: 490 }}
            sx={{
              height: "auto",
            }}
          />
        </Box>
        <Box
          maxWidth="600px"
          flex="2 1 300px" // flex-grow: 2, flex-shrink: 1, flex-basis: 300px          display="flex"
          flexDirection="column"
          alignItems={{ xs: "flex-start", md: "flex-start" }} // Center on mobile, left-align on medium+
          textAlign={{ xs: "center", md: "left" }} // Center text on mobile, left on medium+
        >
          <TypingIntro />
          <Typography variant="subtitle2" sx={{ py: 2 }}>
            I'm a
            <BoldedText
              fontWeight="fontWeightMedium"
              text={" Software Engineer "}
              color="#64ffda"
            />
            based in Toronto, Canada. I'm driven by clean code, high-impact
            products, and (of course) lots of caffeine. I've contributed to
            major feature launches in industry-leading services, and am open to
            new challenges that push the boundaries of great software.
          </Typography>
          <Socials />
        </Box>
      </Box>
    </Box>
  );
}

function BoldedText({ fontWeight, text, color = "inherit" }) {
  return (
    <Box fontWeight={fontWeight} color={color} display="inline">
      {text}
    </Box>
  );
}

function TypingIntro() {
  return (
    <Typography variant="h4">
      <Typewriter
        onInit={(typewriter) => {
          typewriter
            .typeString("Hi")
            .pauseFor(300)
            .typeString(', it\'s <span style="color: #64ffda">Satinder</span>')
            .pauseFor(1000)
            .start();
        }}
        options={{
          cursor: '<span style="color: #64ffda">|</span>',
          delay: 50,
          loop: false,
          autoStart: true,
          wrapperClassName: "typewriter-text",
        }}
      />
    </Typography>
  );
}

function Socials() {
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
      justifyContent={{ xs: "center", md: "flex-start" }}
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
            color: "#ccd6f6",
            border: "1px solid rgba(100, 255, 218, 0.2)",
            "&:hover": {
              color: "#64ffda",
              borderColor: "#64ffda",
              backgroundColor: "rgba(100, 255, 218, 0.1)",
              transform: "rotate(-15deg) translateY(-3px)",
            },
            transition: "all 0.3s ease",
            padding: { xs: "8px", md: "10px" },
          }}
        >
          {link.icon}
        </IconButton>
      ))}
    </Box>
  );
}

export default Hero;
