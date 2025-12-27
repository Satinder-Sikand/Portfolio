import React from "react";
import { Box, Typography } from "@mui/material";
import Typewriter from "typewriter-effect";

function Hero() {
  return (
    <>
      <Box
        id="hero"
        minHeight="100vh"
        display="flex"
        alignItems="center"
        textAlign="center"
        width={"90%"}
        mx={"auto"}
      >
        <Box display="flex-column">
          <Typography variant="h4">
            <Typewriter
              onInit={(typewriter) => {
                typewriter
                  .typeString("Hi")
                  .pauseFor(300)
                  .typeString(
                    ', I\'m <span style="color: #64ffda">Satinder</span>'
                  )
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
          <Typography variant="subtitle2" sx={{ py: 1 }}>
            I'm a
            <BoldedText
              fontWeight="fontWeightMedium"
              text={" Software Engineer "}
              color="#64ffda"
            />
            based out of Toronto, Canada. I'm driven by clean code, thoughtful
            abstractions, and (of course) just enough caffeine. I've contributed
            to major feature launches in industry-leading services, and am
            always open to new challenges that push the boundaries of great
            software.
          </Typography>
        </Box>
      </Box>
    </>
  );
}

function BoldedText({ fontWeight, text, color = "inherit" }) {
  return (
    <Box fontWeight={fontWeight} color={color} display="inline">
      {text}
    </Box>
  );
}

function originalTypeWriter() {
  return (
    <Typewriter
      onInit={(typewriter) => {
        typewriter
          .typeString("Hi, I'm ")
          .pauseFor(300)
          .typeString('<span style="color: #64ffda">Satinder</span>')
          .pauseFor(1000)
          .deleteAll()
          .typeString(
            '<span style="color: #64ffda">Full Stack Developer</span>'
          )
          .pauseFor(1000)
          .deleteAll()
          .typeString('<span style="color: #64ffda">Software Engineer</span>')
          .start();
      }}
      options={{
        cursor: '<span style="color: #64ffda">|</span>',
        delay: 50,
        loop: true,
        autoStart: true,
        wrapperClassName: "typewriter-text",
      }}
    />
  );
}

export default Hero;
