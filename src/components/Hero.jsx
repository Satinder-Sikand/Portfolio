import { Box, Typography, useTheme } from "@mui/material";
import Typewriter from "typewriter-effect";
import mint_turban from "../assets/images/mint_turban.png";
import Socials from "./Socials";

function Hero() {
  const theme = useTheme();
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
              color={theme.palette.primary.main}
            />
            based in Toronto, Canada. I'm driven by clean code, high-impact
            products, and (of course) lots of caffeine. I've contributed to
            major feature launches in industry-leading services, and am open to
            new challenges that push the boundaries of great software.
          </Typography>
          <Socials
            size={{ xs: "8px", md: "10px" }}
            justifyContent={{ xs: "center", md: "flex-start" }}
          />
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
  const theme = useTheme();
  return (
    <Typography variant="h4">
      <Typewriter
        onInit={(typewriter) => {
          typewriter
            .typeString("Hi")
            .pauseFor(300)
            .typeString(
              `, it's <span style="color: ${theme.palette.primary.main}">Satinder</span>`
            )
            .pauseFor(1000)
            .start();
        }}
        options={{
          cursor: `<span style="color: ${theme.palette.primary.main}">|</span>`,
          delay: 50,
          loop: false,
          autoStart: true,
          wrapperClassName: "typewriter-text",
        }}
      />
    </Typography>
  );
}

export default Hero;
